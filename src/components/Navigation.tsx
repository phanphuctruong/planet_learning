import React from 'react';
import {
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Sparkles,
  Download,
  MapPin,
  Flame,
  Award,
} from 'lucide-react';
import { getNextRankProgress } from '../utils/engine';
import { sounds } from '../utils/audio';

interface NavigationProps {
  xp: number;
  soundEnabled: boolean;
  voiceEnabled: boolean;
  onToggleSound: () => void;
  onToggleVoice: () => void;
  onOpenRoadmap: () => void;
  onOpenGenerator: () => void;
  onOpenExport: () => void;
  activeLessonTitle?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  xp,
  soundEnabled,
  voiceEnabled,
  onToggleSound,
  onToggleVoice,
  onOpenRoadmap,
  onOpenGenerator,
  onOpenExport,
  activeLessonTitle,
}) => {
  const { currentRank, nextRank, progressPercent, xpNeeded } = getNextRankProgress(xp);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-cyan-900/40 px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sounds.playRobotBeep();
              onOpenRoadmap();
            }}
            className="flex items-center gap-2.5 group text-left focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
            aria-label="Về bản đồ trạm vũ trụ Pythonia"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-900 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] border border-cyan-300/40">
              <span className="text-xl">🚀</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm tracking-widest font-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                  PYTHONIA
                </span>
                <span className="px-1.5 py-0.2 text-[10px] uppercase font-mono font-bold rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  A.X.E.L OS
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans hidden sm:block">
                Hệ Thống Gamification Python 5E
              </p>
            </div>
          </button>

          {activeLessonTitle && (
            <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-slate-800 text-xs text-slate-300">
              <span className="text-cyan-400 font-mono">Đang thám hiểm:</span>
              <span className="font-medium text-slate-100 max-w-[200px] truncate">{activeLessonTitle}</span>
            </div>
          )}
        </div>

        {/* Cadet Rank & XP Progression Bar */}
        <div className="flex items-center gap-3 bg-slate-900/90 border border-cyan-900/50 rounded-xl px-3 py-1.5 shadow-inner">
          <div className="flex items-center gap-1.5">
            <span className="text-lg">{currentRank.badge}</span>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-mono uppercase font-bold text-cyan-300">
                  {currentRank.title}
                </span>
                <span className="text-[10px] px-1 rounded bg-slate-800 text-amber-400 font-mono font-bold flex items-center gap-0.5">
                  <Flame className="w-2.5 h-2.5 inline" /> {xp} XP
                </span>
              </div>
              <div className="w-24 sm:w-32 bg-slate-950 rounded-full h-1.5 mt-0.5 overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
          {nextRank && (
            <span className="text-[10px] text-slate-400 font-mono hidden md:inline">
              + {xpNeeded} XP lên cấp
            </span>
          )}
        </div>

        {/* Actions & Settings Controls */}
        <div className="flex items-center gap-2">
          {/* Sound & Voice Toggles */}
          <div className="flex items-center bg-slate-900/80 border border-slate-800 rounded-lg p-0.5">
            <button
              onClick={() => {
                onToggleSound();
                sounds.playClick();
              }}
              className={`p-1.5 rounded-md transition-colors ${
                soundEnabled
                  ? 'text-cyan-400 bg-cyan-950/60 hover:bg-cyan-900/60'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
              title={soundEnabled ? 'Tắt hiệu ứng âm thanh SFX' : 'Bật hiệu ứng âm thanh SFX'}
              aria-label={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                onToggleVoice();
                sounds.playClick();
              }}
              className={`p-1.5 rounded-md transition-colors ${
                voiceEnabled
                  ? 'text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/60'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
              title={voiceEnabled ? 'Tắt giọng nói Robot A.X.E.L' : 'Bật giọng nói Robot A.X.E.L'}
              aria-label={voiceEnabled ? 'Tắt giọng nói' : 'Bật giọng nói'}
            >
              {voiceEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </button>
          </div>

          {/* Roadmap Navigator button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenRoadmap();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all hover:border-cyan-500/50"
            aria-label="Mở bản đồ 10 màn chơi"
          >
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Bản Đồ 10 Màn</span>
          </button>

          {/* AI / Custom Lesson Generator */}
          <button
            onClick={() => {
              sounds.playLaser();
              onOpenGenerator();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-all hover:scale-102"
            aria-label="Tạo bài giảng mới với A.X.E.L"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Tạo Bài Giảng</span>
          </button>

          {/* Export Lesson */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenExport();
            }}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
            title="Xuất bài giảng (Markdown / Giáo án)"
            aria-label="Xuất bài giảng"
          >
            <Download className="w-4 h-4 text-slate-300" />
          </button>
        </div>
      </div>
    </header>
  );
};
