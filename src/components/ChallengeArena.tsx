import React, { useState } from 'react';
import { GamifiedChallenge } from '../types';
import {
  Swords,
  Search,
  Wrench,
  Key,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
  Award,
} from 'lucide-react';
import { validateChallengeCode } from '../utils/engine';
import { runPythonCode } from '../utils/pythonRunner';
import { sounds } from '../utils/audio';

interface ChallengeArenaProps {
  challenges: GamifiedChallenge[];
  onAwardXp: (amount: number, challengeId: string) => void;
  completedChallengeIds: string[];
}

export const ChallengeArena: React.FC<ChallengeArenaProps> = ({
  challenges,
  onAwardXp,
  completedChallengeIds,
}) => {
  const [activeChallengeIdx, setActiveChallengeIdx] = useState(0);
  const [userCodes, setUserCodes] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, { isValid: boolean; message: string; output?: string }>>({});
  const [unlockedHintLevel, setUnlockedHintLevel] = useState<Record<string, number>>({});

  const challenge = challenges[activeChallengeIdx] || challenges[0];
  const challengeCode = userCodes[challenge.id] !== undefined ? userCodes[challenge.id] : challenge.starterCode || challenge.hintLevel2Skeleton;
  const isCompleted = completedChallengeIds.includes(challenge.id);
  const currentHintLevel = unlockedHintLevel[challenge.id] || 0;
  const currentFeedback = feedback[challenge.id];

  const handleUpdateCode = (newCode: string) => {
    setUserCodes(prev => ({ ...prev, [challenge.id]: newCode }));
  };

  const handleUnlockHint = (level: number) => {
    sounds.playClick();
    setUnlockedHintLevel(prev => ({
      ...prev,
      [challenge.id]: Math.max(prev[challenge.id] || 0, level),
    }));
  };

  const handleCopySkeleton = () => {
    sounds.playClick();
    handleUpdateCode(challenge.hintLevel2Skeleton);
  };

  const handleTestCode = () => {
    sounds.playLaser();

    // 1. Validate rules & blanks
    const validation = validateChallengeCode(challengeCode, {
      testKeywords: challenge.testKeywords,
    });

    if (!validation.isValid) {
      sounds.playAlarm();
      setFeedback(prev => ({
        ...prev,
        [challenge.id]: {
          isValid: false,
          message: validation.message,
        },
      }));
      return;
    }

    // 2. Run simulation
    const runRes = runPythonCode(challengeCode);
    const outputJoined = runRes.stdout.join('\n');

    if (runRes.isError) {
      sounds.playAlarm();
      setFeedback(prev => ({
        ...prev,
        [challenge.id]: {
          isValid: false,
          message: `Lỗi thực thi: ${runRes.errorMessage}`,
          output: outputJoined,
        },
      }));
      return;
    }

    // Success!
    sounds.playSuccess();
    setFeedback(prev => ({
      ...prev,
      [challenge.id]: {
        isValid: true,
        message: '🎉 NĂNG LƯỢNG CODE ĐÃ THÔNG SUỐT! Bạn đã hoàn thành xuất sắc thử thách!',
        output: outputJoined,
      },
    }));

    if (!isCompleted) {
      onAwardXp(challenge.xpReward, challenge.id);
    }
  };

  const handleReset = () => {
    sounds.playClick();
    handleUpdateCode(challenge.starterCode || challenge.hintLevel2Skeleton);
    setFeedback(prev => {
      const next = { ...prev };
      delete next[challenge.id];
      return next;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono">PHẦN 4:</span> KHU THỰC HÀNH CHIẾN BINH (GAMIFIED CODING CHALLENGES)
          </h3>
          <p className="text-xs text-slate-400">
            Hệ thống hỗ trợ sinh tồn 3 tầng (3-Level Hint System) giúp chiến binh tự tin vượt qua mọi chướng ngại vật!
          </p>
        </div>

        {/* Challenge Selector Tabs */}
        <div className="flex items-center gap-2">
          {challenges.map((c, idx) => {
            const done = completedChallengeIds.includes(c.id);
            const isBoss = c.isBoss;

            return (
              <button
                key={c.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveChallengeIdx(idx);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  idx === activeChallengeIdx
                    ? isBoss
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/60 shadow-[0_0_12px_rgba(244,63,94,0.4)]'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>{isBoss ? '👾' : '⚔️'}</span>
                <span>{c.name.split(':')[0]}</span>
                {done && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                <span className="text-[10px] font-mono text-amber-400 font-bold">+{c.xpReward} XP</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Challenge Box */}
      <div className={`rounded-2xl border p-6 transition-all ${
        challenge.isBoss
          ? 'bg-gradient-to-b from-rose-950/20 via-slate-950 to-slate-950 border-rose-500/40 shadow-[0_0_25px_rgba(244,63,94,0.15)]'
          : 'bg-slate-950/90 border-slate-800 shadow-xl'
      }`}>
        {/* Challenge Header & Situation */}
        <div className="space-y-3 pb-5 border-b border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">{challenge.isBoss ? '👾' : '⚔️'}</span>
              <h4 className="text-base font-extrabold text-white">
                THỬ THÁCH: <span className={challenge.isBoss ? 'text-rose-400' : 'text-cyan-300'}>{challenge.name}</span>
              </h4>
            </div>

            <div className="flex items-center gap-2">
              {challenge.isBoss && (
                <span className="text-[10px] font-mono uppercase font-black text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-500/40 animate-pulse">
                  TRÙM CUỐI BOSS BUG
                </span>
              )}
              {isCompleted ? (
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ĐÃ HOÀN THÀNH (+{challenge.xpReward} XP)
                </span>
              ) : (
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-500/30">
                  Phần thưởng: +{challenge.xpReward} XP
                </span>
              )}
            </div>
          </div>

          <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 text-sm text-slate-200 leading-relaxed">
            <strong className="text-cyan-400 font-mono">Tình huống:</strong> {challenge.situation}
          </div>
        </div>

        {/* 3-Level Hint System (Hệ thống hỗ trợ sinh tồn) */}
        <div className="my-6 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>HỆ THỐNG HỖ TRỢ SINH TỒN (3-LEVEL HINT SYSTEM)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Tầng 1: Manh mối tư duy */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono text-xs font-bold">
                  <Search className="w-4 h-4 text-cyan-400" />
                  <span>🔍 TẦNG 1: MANH MỐI TƯ DUY</span>
                </div>
                {currentHintLevel >= 1 ? (
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {challenge.hintLevel1}
                  </p>
                ) : (
                  <p className="text-xs text-slate-500 italic">
                    Gợi ý logic/thuật toán bằng ngôn ngữ đời thường, không lộ cú pháp.
                  </p>
                )}
              </div>

              {currentHintLevel < 1 && (
                <button
                  onClick={() => handleUnlockHint(1)}
                  className="mt-3 w-full py-1.5 rounded-lg text-xs font-medium text-cyan-400 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/30 transition-colors"
                >
                  Mở Khóa Tầng 1
                </button>
              )}
            </div>

            {/* Tầng 2: Bản đồ khung code _____ */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-amber-400 font-mono text-xs font-bold">
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <span>🛠️ TẦNG 2: BẢN ĐỒ KHUNG CODE</span>
                </div>
                {currentHintLevel >= 2 ? (
                  <div className="space-y-2">
                    <pre className="p-2 rounded bg-slate-950 text-[11px] font-mono text-amber-300 border border-slate-800 overflow-x-auto whitespace-pre-wrap">
                      <code>{challenge.hintLevel2Skeleton}</code>
                    </pre>
                    <button
                      onClick={handleCopySkeleton}
                      className="text-[11px] font-mono text-amber-400 hover:text-amber-300 underline"
                    >
                      Dán vào khung soạn thảo
                    </button>
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 italic">
                    Đoạn code khung có các ô trống _____ để học sinh điền vào.
                  </p>
                )}
              </div>

              {currentHintLevel < 2 && (
                <button
                  onClick={() => handleUnlockHint(2)}
                  className="mt-3 w-full py-1.5 rounded-lg text-xs font-medium text-amber-400 bg-amber-950/60 hover:bg-amber-900/80 border border-amber-500/30 transition-colors"
                >
                  Mở Khóa Tầng 2
                </button>
              )}
            </div>

            {/* Tầng 3: Chìa khóa năng lượng - Lời giải */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-emerald-400 font-mono text-xs font-bold">
                  <Key className="w-4 h-4 text-emerald-400" />
                  <span>🔑 TẦNG 3: CHÌA KHÓA NĂNG LƯỢNG</span>
                </div>

                <details className="text-xs group cursor-pointer">
                  <summary className="text-slate-400 group-hover:text-emerald-400 font-mono font-medium transition-colors select-none py-1">
                    Nhấn để mở khóa mật mã giải cứu (Đáp án hoàn chỉnh)
                  </summary>
                  <div className="mt-2 space-y-2 border-t border-slate-800 pt-2">
                    <pre className="p-2 rounded bg-slate-950 text-[11px] font-mono text-emerald-300 border border-slate-800 overflow-x-auto whitespace-pre-wrap">
                      <code>{challenge.hintLevel3Solution}</code>
                    </pre>
                    <p className="text-[11px] text-slate-300 italic">
                      💡 {challenge.hintLevel3Explanation}
                    </p>
                  </div>
                </details>
              </div>

              <div className="mt-2 text-[10px] text-slate-500 font-mono">
                *Hãy tự thử sức trước khi xem lời giải nhé!
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Coding Sandbox */}
        <div className="space-y-3 pt-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>KHOANG SOẠN THẢO CODE CHIẾN BINH:</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800"
                title="Khôi phục code ban đầu"
              >
                <RotateCcw className="w-3 h-3" /> Đặt Lại
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
            <textarea
              value={challengeCode}
              onChange={e => handleUpdateCode(e.target.value)}
              rows={6}
              className="w-full p-4 bg-slate-950 text-cyan-200 font-mono text-xs leading-relaxed focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-y"
              placeholder="# Nạp đạn code giải cứu trạm không gian tại đây..."
              spellCheck={false}
              aria-label="Khung soạn thảo code giải đố"
            />
          </div>

          {/* Test & Run Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <span className="text-[11px] text-slate-400 font-mono">
              Quy tắc: Thay thế các ô <code className="text-amber-400">_____</code> bằng câu lệnh hợp lệ.
            </span>

            <button
              onClick={handleTestCode}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:scale-102"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>KIỂM TRA NĂNG LƯỢNG & DIỆT BUG</span>
            </button>
          </div>

          {/* Feedback Display */}
          {currentFeedback && (
            <div
              className={`mt-4 rounded-xl p-4 border transition-all ${
                currentFeedback.isValid
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                  : 'bg-rose-950/40 border-rose-500/50 text-rose-300'
              }`}
            >
              <div className="flex items-start gap-3">
                {currentFeedback.isValid ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1 text-xs">
                  <div className="font-bold text-sm">
                    {currentFeedback.isValid ? 'THÀNH CÔNG!' : 'CẢNH BÁO QUÁI VẬT BUG!'}
                  </div>
                  <p>{currentFeedback.message}</p>
                  {currentFeedback.output && (
                    <div className="mt-2 pt-2 border-t border-slate-800">
                      <div className="text-[10px] font-mono uppercase text-slate-400">Kết quả chạy:</div>
                      <pre className="font-mono text-[11px] bg-slate-950/80 p-2 rounded mt-1 overflow-x-auto text-slate-200">
                        <code>{currentFeedback.output}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
