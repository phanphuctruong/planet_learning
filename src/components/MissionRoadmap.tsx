import React, { useState } from 'react';
import { LessonPlan } from '../types';
import { AxelAvatar } from './AxelAvatar';
import { Search, ChevronRight, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { sounds } from '../utils/audio';

interface MissionRoadmapProps {
  missions: LessonPlan[];
  completedMissionIds: string[];
  activeMissionId: string;
  onSelectMission: (missionId: string) => void;
  onOpenGenerator: () => void;
}

export const MissionRoadmap: React.FC<MissionRoadmapProps> = ({
  missions,
  completedMissionIds,
  activeMissionId,
  onSelectMission,
  onOpenGenerator,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMissions = missions.filter(m => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    const matchNum = String(m.overview.lessonNumber) === q;
    const matchName = m.overview.codeName.toLowerCase().includes(q);
    const matchTitle = m.overview.lessonTitle.toLowerCase().includes(q);
    const matchSkills = m.overview.unlockedSkills.some(s => s.toLowerCase().includes(q));
    return matchNum || matchName || matchTitle || matchSkills;
  });

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto space-y-8">
      {/* Hero Welcome Banner with A.X.E.L Greeting */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-cyan-500/30 p-6 md:p-8 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 flex flex-col items-center">
            <AxelAvatar
              mood="excited"
              size="lg"
              onClick={() => {
                sounds.playRobotBeep();
                sounds.speak(
                  "Bíp bíp! Chào mừng Chiến binh Code đến với Tàu Thám Hiểm Vũ Trụ Pythonia! Tôi là A.X.E.L – Game Master tối cao của bạn!"
                );
              }}
            />
            <span className="mt-2 text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/40">
              Nhấn để nghe A.X.E.L
            </span>
          </div>

          <div className="flex-1 text-center md:text-left space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
              <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>LỘ TRÌNH 10 TUẦN - TRẠM VŨ TRỤ PYTHONIA</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Sứ Mệnh Khám Phá Python Cùng{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Robot A.X.E.L
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Chào mừng các <strong className="text-cyan-300">Phi hành gia nhí</strong> (11 - 15 tuổi)! Chúng ta sẽ biến
              các dòng code khô khan thành chìa khóa mở năng lượng trạm, vẽ bản đồ sao với Rùa Không Gian và tiêu diệt
              quái vật Bug theo mô hình 5E Gamification!
            </p>

            {/* Quick 1-10 Jump Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-1.5">
              <span className="text-xs font-mono text-slate-400 mr-1">Chọn nhanh màn:</span>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => {
                const mission = missions.find(m => m.overview.lessonNumber === num);
                const isCompleted = mission && completedMissionIds.includes(mission.id);
                const isActive = mission && mission.id === activeMissionId;

                return (
                  <button
                    key={num}
                    onClick={() => {
                      if (mission) {
                        sounds.playClick();
                        onSelectMission(mission.id);
                      }
                    }}
                    className={`w-8 h-8 rounded-lg font-mono text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-cyan-400 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.8)] scale-110'
                        : isCompleted
                        ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-900'
                        : 'bg-slate-800 text-slate-300 hover:bg-cyan-950 hover:text-cyan-300 border border-slate-700'
                    }`}
                    title={`Màn ${num}`}
                    aria-label={`Màn ${num}`}
                  >
                    {num}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Nhập số màn (1-10) hoặc chủ đề (print, turtle, for, hàm...)"
            className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-sans"
            aria-label="Tìm kiếm màn chơi"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="text-xs text-slate-400 font-mono">
            Đã hoàn thành: <span className="text-emerald-400 font-bold">{completedMissionIds.length}</span>/10 Màn
          </div>

          <button
            onClick={() => {
              sounds.playLaser();
              onOpenGenerator();
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-500/40 transition-all hover:scale-102"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tạo Màn Riêng (AI)</span>
          </button>
        </div>
      </div>

      {/* 10-Stage Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMissions.map(m => {
          const isCompleted = completedMissionIds.includes(m.id);
          const isActive = m.id === activeMissionId;

          return (
            <div
              key={m.id}
              onClick={() => {
                sounds.playClick();
                onSelectMission(m.id);
              }}
              className={`group relative rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-slate-900/95 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400'
                  : isCompleted
                  ? 'bg-slate-900/70 border-emerald-500/40 hover:border-emerald-400 hover:bg-slate-900'
                  : 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80'
              }`}
            >
              <div>
                {/* Header with Stage Badge & Status */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl p-2 rounded-xl bg-slate-950 border border-slate-800 shadow-inner">
                      {m.overview.badge.icon}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-cyan-400">
                        {m.overview.codeName}
                      </span>
                      <h2 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {m.overview.lessonTitle}
                      </h2>
                    </div>
                  </div>

                  {isCompleted && (
                    <span className="shrink-0 flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Đạt
                    </span>
                  )}
                </div>

                {/* Briefing summary */}
                <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {m.overview.missionBriefing}
                </p>

                {/* Unlocked Skills list */}
                <div className="space-y-1 mb-4">
                  <div className="text-[10px] font-mono uppercase text-slate-400">Kỹ năng mở khóa:</div>
                  {m.overview.unlockedSkills.slice(0, 2).map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {m.challenges.length} Thử thách • {m.storyboard.length} Phân cảnh
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Vào Màn <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
