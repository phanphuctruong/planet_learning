import React, { useState, useEffect } from 'react';
import { MISSIONS } from './data/missions';
import { LessonPlan } from './types';
import { Navigation } from './components/Navigation';
import { MissionRoadmap } from './components/MissionRoadmap';
import { MissionView } from './components/MissionView';
import { MissionGeneratorModal } from './components/MissionGeneratorModal';
import { ExportModal } from './components/ExportModal';
import { sounds } from './utils/audio';

export default function App() {
  const [missions, setMissions] = useState<LessonPlan[]>(MISSIONS);
  const [activeMissionId, setActiveMissionId] = useState<string>('man-1');
  const [isRoadmapView, setIsRoadmapView] = useState<boolean>(true); // Shows roadmap initially as requested

  // Cadet stats
  const [xp, setXp] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('pythonia_xp');
      return saved ? parseInt(saved, 10) : 120;
    } catch {
      return 120;
    }
  });

  const [completedMissionIds, setCompletedMissionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pythonia_completed_missions');
      return saved ? JSON.parse(saved) : ['man-1'];
    } catch {
      return ['man-1'];
    }
  });

  const [completedChallengeIds, setCompletedChallengeIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pythonia_completed_challenges');
      return saved ? JSON.parse(saved) : ['c1-1'];
    } catch {
      return ['c1-1'];
    }
  });

  // Audio toggles
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  // Modals
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Sync sounds state
  useEffect(() => {
    sounds.setSoundEnabled(soundEnabled);
  }, [soundEnabled]);

  useEffect(() => {
    sounds.setVoiceEnabled(voiceEnabled);
  }, [voiceEnabled]);

  // Persist cadet progress
  useEffect(() => {
    try {
      localStorage.setItem('pythonia_xp', String(xp));
      localStorage.setItem('pythonia_completed_missions', JSON.stringify(completedMissionIds));
      localStorage.setItem('pythonia_completed_challenges', JSON.stringify(completedChallengeIds));
    } catch {}
  }, [xp, completedMissionIds, completedChallengeIds]);

  const activeMission = missions.find(m => m.id === activeMissionId) || missions[0];

  const handleSelectMission = (missionId: string) => {
    setActiveMissionId(missionId);
    setIsRoadmapView(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAwardXp = (amount: number, challengeId: string) => {
    setXp(prev => prev + amount);
    setCompletedChallengeIds(prev => (prev.includes(challengeId) ? prev : [...prev, challengeId]));

    // Check if all challenges in active mission are completed
    if (activeMission) {
      const remaining = activeMission.challenges.filter(c => c.id !== challengeId && !completedChallengeIds.includes(c.id));
      if (remaining.length === 0) {
        setCompletedMissionIds(prev => (prev.includes(activeMission.id) ? prev : [...prev, activeMission.id]));
      }
    }
  };

  const handleLessonGenerated = (newLesson: LessonPlan) => {
    setMissions(prev => [newLesson, ...prev]);
    setActiveMissionId(newLesson.id);
    setIsRoadmapView(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Background stars grid decoration */}
      <div className="fixed inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Navigation Header */}
      <Navigation
        xp={xp}
        soundEnabled={soundEnabled}
        voiceEnabled={voiceEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        onToggleVoice={() => setVoiceEnabled(!voiceEnabled)}
        onOpenRoadmap={() => setIsRoadmapView(true)}
        onOpenGenerator={() => setIsGeneratorOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        activeLessonTitle={isRoadmapView ? undefined : activeMission?.overview.lessonTitle}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {isRoadmapView ? (
          <MissionRoadmap
            missions={missions}
            completedMissionIds={completedMissionIds}
            activeMissionId={activeMissionId}
            onSelectMission={handleSelectMission}
            onOpenGenerator={() => setIsGeneratorOpen(true)}
          />
        ) : (
          <MissionView
            lesson={activeMission}
            onBackToRoadmap={() => setIsRoadmapView(true)}
            onAwardXp={handleAwardXp}
            completedChallengeIds={completedChallengeIds}
            onOpenExport={() => setIsExportOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-sm py-4 px-6 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>🚀 Tàu Thám Hiểm Vũ Trụ Pythonia • Game Master A.X.E.L</span>
          <span>Chương trình Lập trình Python Gamified 5E cho lứa tuổi 11 - 15</span>
        </div>
      </footer>

      {/* Custom Mission Generator Modal */}
      <MissionGeneratorModal
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
        onLessonGenerated={handleLessonGenerated}
      />

      {/* Export Markdown Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        lesson={activeMission}
      />
    </div>
  );
}
