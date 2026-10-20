import React, { useState } from 'react';
import { StoryboardScene } from '../types';
import { AxelAvatar } from './AxelAvatar';
import { Play, Pause, SkipForward, SkipBack, Table, Film, Volume2 } from 'lucide-react';
import { sounds } from '../utils/audio';

interface StoryboardViewerProps {
  scenes: StoryboardScene[];
}

export const StoryboardViewer: React.FC<StoryboardViewerProps> = ({ scenes }) => {
  const [viewMode, setViewMode] = useState<'table' | 'player'>('table');
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const currentScene = scenes[activeSceneIdx] || scenes[0];

  const handlePlayVoice = (text: string) => {
    if (isPlayingVoice) {
      sounds.stopSpeaking();
      setIsPlayingVoice(false);
      return;
    }

    setIsPlayingVoice(true);
    sounds.speak(text, () => {
      setIsPlayingVoice(false);
    });
  };

  const nextScene = () => {
    sounds.stopSpeaking();
    setIsPlayingVoice(false);
    sounds.playClick();
    if (activeSceneIdx < scenes.length - 1) {
      setActiveSceneIdx(activeSceneIdx + 1);
    } else {
      setActiveSceneIdx(0);
    }
  };

  const prevScene = () => {
    sounds.stopSpeaking();
    setIsPlayingVoice(false);
    sounds.playClick();
    if (activeSceneIdx > 0) {
      setActiveSceneIdx(activeSceneIdx - 1);
    } else {
      setActiveSceneIdx(scenes.length - 1);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header with Mode Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono">PHẦN 2:</span> STORYBOARD KỊCH BẢN PHÂN CẢNH ĐA PHƯƠNG TIỆN
          </h3>
          <p className="text-xs text-slate-400">
            Kịch bản video bài giảng 5E tích hợp đa phương tiện (Âm thanh, Visual, Lời thoại A.X.E.L và On-screen Code)
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
          <button
            onClick={() => {
              sounds.playClick();
              setViewMode('table');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'table'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Bảng Kịch Bản Chuẩn</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              setViewMode('player');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'player'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Film className="w-3.5 h-3.5 text-cyan-400" />
            <span>Rạp Chiếu A.X.E.L</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Standard Table View (Mandatory format in prompt) */}
      {viewMode === 'table' ? (
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/90 text-cyan-300 border-b border-slate-800 font-mono text-xs uppercase tracking-wider">
                <th className="py-3 px-4 w-[18%]">Cảnh (#) & Thời lượng</th>
                <th className="py-3 px-4 w-[25%]">Hình ảnh & Animation (Visual)</th>
                <th className="py-3 px-4 w-[28%]">Lời thoại A.X.E.L (Voiceover)</th>
                <th className="py-3 px-4 w-[15%]">Âm thanh & SFX (SFX/BGM)</th>
                <th className="py-3 px-4 w-[14%]">Code Màn Hình (On-Screen Code)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans text-xs">
              {scenes.map((scene, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-900/50 transition-colors group"
                >
                  {/* Cảnh & Thời lượng */}
                  <td className="py-3 px-4 align-top">
                    <div className="font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {scene.phaseName}
                    </div>
                    <div className="font-mono text-[11px] text-cyan-400/90 mt-0.5">
                      ⏱️ {scene.duration}
                    </div>
                    <button
                      onClick={() => {
                        setActiveSceneIdx(idx);
                        setViewMode('player');
                        handlePlayVoice(scene.voiceover);
                      }}
                      className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono font-medium text-cyan-400 bg-cyan-950/60 hover:bg-cyan-900/80 px-2 py-0.5 rounded border border-cyan-500/30 transition-all"
                      title="Xem và nghe cảnh này"
                    >
                      <Volume2 className="w-3 h-3" /> Nghe A.X.E.L
                    </button>
                  </td>

                  {/* Hình ảnh & Visual */}
                  <td className="py-3 px-4 align-top text-slate-300 leading-relaxed">
                    {scene.visual}
                  </td>

                  {/* Lời thoại A.X.E.L */}
                  <td className="py-3 px-4 align-top text-slate-200 leading-relaxed italic bg-cyan-950/10">
                    "{scene.voiceover}"
                  </td>

                  {/* Âm thanh & SFX */}
                  <td className="py-3 px-4 align-top text-amber-300/90 font-mono text-[11px] leading-relaxed">
                    🔊 {scene.sfx}
                  </td>

                  {/* Code màn hình */}
                  <td className="py-3 px-4 align-top font-mono text-[11px]">
                    <pre className="p-2 rounded-lg bg-slate-950 text-emerald-400 border border-slate-800 overflow-x-auto whitespace-pre-wrap">
                      <code>{scene.onScreenCode}</code>
                    </pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Mode 2: Interactive Scene Player */
        <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-6 shadow-2xl relative overflow-hidden space-y-6">
          {/* Top scene bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                {currentScene.phaseName}
              </span>
              <span className="font-mono text-xs text-slate-400">⏱️ {currentScene.duration}</span>
            </div>

            {/* Scene navigator pill indicators */}
            <div className="flex items-center gap-1.5">
              {scenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    sounds.stopSpeaking();
                    setIsPlayingVoice(false);
                    setActiveSceneIdx(i);
                  }}
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all ${
                    i === activeSceneIdx
                      ? 'bg-cyan-400 text-slate-950 scale-110 shadow-[0_0_10px_rgba(6,182,212,0.6)]'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                  aria-label={`Chuyển tới cảnh ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Robot Avatar and Speech */}
            <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
              <AxelAvatar
                mood={currentScene.axelMood || 'excited'}
                isSpeaking={isPlayingVoice}
                size="lg"
                onClick={() => handlePlayVoice(currentScene.voiceover)}
              />

              <div className="w-full relative bg-slate-900/90 rounded-2xl p-4 border border-cyan-500/40 shadow-inner">
                <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1">
                  🎙️ Lời thoại A.X.E.L:
                </div>
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{currentScene.voiceover}"
                </p>

                <div className="mt-3 flex justify-center">
                  <button
                    onClick={() => handlePlayVoice(currentScene.voiceover)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                  >
                    {isPlayingVoice ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Tạm Dừng Giọng Nói</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>Phát Giọng Nói A.X.E.L</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Visual & On-screen Code Simulation */}
            <div className="lg:col-span-7 space-y-4">
              {/* Visual Card */}
              <div className="bg-slate-900/70 rounded-2xl p-4 border border-slate-800 space-y-1.5">
                <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                  🎬 Hình ảnh & Animation (Visual):
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentScene.visual}
                </p>
                <div className="text-[11px] font-mono text-amber-300 pt-1">
                  🔊 Hiệu ứng: {currentScene.sfx}
                </div>
              </div>

              {/* On-screen Code Teleprompter */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-cyan-900/60 shadow-inner space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold">
                    💻 Code Hiển Thị Trên Màn Hình Tàu:
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    Live Teleprompter
                  </span>
                </div>
                <pre className="text-xs font-mono text-emerald-300 bg-slate-900/90 p-3 rounded-xl border border-slate-800 overflow-x-auto whitespace-pre-wrap">
                  <code>{currentScene.onScreenCode}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Bottom Player Controls */}
          <div className="flex items-center justify-between border-t border-slate-800 pt-4">
            <button
              onClick={prevScene}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700"
            >
              <SkipBack className="w-3.5 h-3.5" />
              <span>Cảnh Trước</span>
            </button>

            <span className="text-xs font-mono text-slate-400">
              Cảnh {activeSceneIdx + 1} / {scenes.length}
            </span>

            <button
              onClick={nextScene}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700"
            >
              <span>Cảnh Tiếp</span>
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
