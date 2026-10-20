import React, { useState } from 'react';
import { LessonPlan } from '../types';
import { StoryboardViewer } from './StoryboardViewer';
import { CodePlayground } from './CodePlayground';
import { ChallengeArena } from './ChallengeArena';
import {
  ShieldAlert,
  Target,
  Wrench,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Share2,
} from 'lucide-react';
import { sounds } from '../utils/audio';

interface MissionViewProps {
  lesson: LessonPlan;
  onBackToRoadmap: () => void;
  onAwardXp: (amount: number, challengeId: string) => void;
  completedChallengeIds: string[];
  onOpenExport: () => void;
}

export const MissionView: React.FC<MissionViewProps> = ({
  lesson,
  onBackToRoadmap,
  onAwardXp,
  completedChallengeIds,
  onOpenExport,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'briefing' | 'storyboard' | 'code' | 'challenges'>('all');

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto space-y-8">
      {/* Top Header / Breadcrumb navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <button
          onClick={() => {
            sounds.playClick();
            onBackToRoadmap();
          }}
          className="flex items-center gap-2 text-xs font-mono font-medium text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về Bản Đồ 10 Màn Chơi</span>
        </button>

        {/* Section Quick Jump Filter */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tất Cả 4 Phần
          </button>
          <button
            onClick={() => setActiveTab('briefing')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === 'briefing'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            1. Tổng Quan
          </button>
          <button
            onClick={() => setActiveTab('storyboard')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === 'storyboard'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            2. Storyboard
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === 'code'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            3. Code Mẫu
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeTab === 'challenges'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            4. Thử Thách
          </button>
        </div>

        <button
          onClick={onOpenExport}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
        >
          <Share2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Xuất Bài Giảng (MD)</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* PHẦN 1: BẢNG TỔNG QUAN NHIỆM VỤ (MISSION BRIEFING) */}
      {/* ============================================================== */}
      {(activeTab === 'all' || activeTab === 'briefing') && (
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-950/70 border border-cyan-500/40 p-6 md:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="space-y-2 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-mono border border-cyan-500/40">
                <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
                <span>PHẦN 1: BẢNG TỔNG QUAN NHIỆM VỤ (MISSION BRIEFING)</span>
              </div>

              <div className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider">
                {lesson.overview.codeName}
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {lesson.overview.lessonTitle}
              </h1>

              {/* Emergency Situation Storyline */}
              <div className="pt-2 text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <strong className="text-cyan-400 font-mono">Cốt truyện dẫn dắt:</strong> {lesson.overview.missionBriefing}
              </div>
            </div>

            {/* Badge Card */}
            <div className="shrink-0 flex flex-col items-center p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/30 text-center w-full md:w-56 shadow-inner">
              <span className="text-4xl p-2 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
                {lesson.overview.badge.icon}
              </span>
              <div className="mt-2 text-xs font-bold text-white font-mono">
                {lesson.overview.badge.name}
              </div>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                {lesson.overview.badge.description}
              </p>
            </div>
          </div>

          {/* Target Skills & Equipment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
            {/* Mục tiêu mở khóa */}
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-cyan-300">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Mục Tiêu Mở Khóa (Core Skills):</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {lesson.overview.unlockedSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trang bị cần thiết */}
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-amber-300">
                <Wrench className="w-4 h-4 text-amber-400" />
                <span>Trang Bị Cần Thiết (Equipment):</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {lesson.overview.requiredEquipment.map((eq, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-200 border border-slate-700 text-xs font-mono"
                  >
                    🛠️ {eq}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* PHẦN 2: STORYBOARD KỊCH BẢN PHÂN CẢNH ĐA PHƯƠNG TIỆN */}
      {/* ============================================================== */}
      {(activeTab === 'all' || activeTab === 'storyboard') && (
        <section className="pt-2">
          <StoryboardViewer scenes={lesson.storyboard} />
        </section>
      )}

      {/* ============================================================== */}
      {/* PHẦN 3: BỘ CODE MẪU VŨ TRỤ (CLEAN & COMMENTED CODE) */}
      {/* ============================================================== */}
      {(activeTab === 'all' || activeTab === 'code') && (
        <section className="pt-2">
          <CodePlayground
            sampleCode={lesson.sampleCode}
            explanation={lesson.sampleCodeExplanation}
          />
        </section>
      )}

      {/* ============================================================== */}
      {/* PHẦN 4: KHU THỰC HÀNH CHIẾN BINH (GAMIFIED CODING CHALLENGES) */}
      {/* ============================================================== */}
      {(activeTab === 'all' || activeTab === 'challenges') && (
        <section className="pt-2">
          <ChallengeArena
            challenges={lesson.challenges}
            onAwardXp={onAwardXp}
            completedChallengeIds={completedChallengeIds}
          />
        </section>
      )}
    </div>
  );
};
