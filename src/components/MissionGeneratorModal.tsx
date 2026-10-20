import React, { useState } from 'react';
import { LessonPlan } from '../types';
import { AxelAvatar } from './AxelAvatar';
import { Sparkles, X, Loader2, Wand2, Compass } from 'lucide-react';
import { sounds } from '../utils/audio';

interface MissionGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLessonGenerated: (lesson: LessonPlan) => void;
}

export const MissionGeneratorModal: React.FC<MissionGeneratorModalProps> = ({
  isOpen,
  onClose,
  onLessonGenerated,
}) => {
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState('45 phút');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const presetTopics = [
    'Dictionary & Kho Báu Hành Tinh',
    'Tuple & Bản Đồ Sao Bất Biến',
    'Xử Lý File & Nhật Ký Phi Hành Đoàn',
    'Hàm Đệ Quy & Mê Cung Không Gian',
    'Lớp Đối Tượng (OOP) Chế Tạo Phi Thuyền',
  ];

  const handleGenerate = async (selectedTopic?: string) => {
    const finalTopic = (selectedTopic || topic).trim();
    if (!finalTopic) {
      setErrorMsg('Vui lòng nhập chủ đề muốn A.X.E.L thiết kế kịch bản.');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    sounds.playLaser();

    try {
      const res = await fetch('/api/generate-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: finalTopic,
          duration,
          gradeLevel: '11-15',
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      if (data.lesson) {
        sounds.playSuccess();
        onLessonGenerated(data.lesson);
        onClose();
      } else {
        throw new Error('Dữ liệu bài giảng không hợp lệ');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Không thể kết nối đến máy chủ AI. Đang sử dụng chế độ dự phòng...');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-cyan-500/40 p-6 md:p-8 shadow-[0_0_50px_rgba(6,182,212,0.25)] space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4">
          <AxelAvatar mood="excited" size="md" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                A.X.E.L MISSION CREATOR
              </span>
              <span className="px-1.5 py-0.2 text-[10px] uppercase font-mono font-bold rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                AI Gamified 5E
              </span>
            </div>
            <h3 className="text-xl font-black text-white">
              Tạo Kịch Bản Màn Chơi Tùy Biến
            </h3>
            <p className="text-xs text-slate-400">
              Nhập bất kỳ khái niệm Python nào để A.X.E.L biến thành màn phiêu lưu 4 phần hoàn chỉnh!
            </p>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
              Chủ Đề Python Hoặc Khái Niệm Muốn Dạy:
            </label>
            <input
              type="text"
              value={topic}
              onChange={e => setTopic(e.target.value)}
              placeholder="Ví dụ: Dictionary, Xử lý chuỗi nâng cao, Hàm đệ quy..."
              className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
              disabled={loading}
              aria-label="Chủ đề bài học"
            />
          </div>

          {/* Quick Preset Topics */}
          <div>
            <span className="text-[11px] font-mono text-slate-400 block mb-1.5">
              Gợi ý chủ đề nhanh:
            </span>
            <div className="flex flex-wrap gap-2">
              {presetTopics.map((pt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setTopic(pt);
                    sounds.playClick();
                  }}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:bg-cyan-950 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 transition-colors"
                >
                  {pt}
                </button>
              ))}
            </div>
          </div>

          {/* Duration selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Thời Lượng Dự Kiến:
              </label>
              <select
                value={duration}
                onChange={e => setDuration(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="30 phút">30 phút (Tiết học nhanh)</option>
                <option value="45 phút">45 phút (Chuẩn 1 tiết THCS)</option>
                <option value="90 phút">90 phút (Đồ án tích hợp 2 tiết)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Đối Tượng Mục Tiêu:
              </label>
              <div className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-cyan-400 font-mono">
                THCS (11 - 15 tuổi) • 5E Gamified
              </div>
            </div>
          </div>

          {errorMsg && (
            <div className="text-xs text-rose-400 bg-rose-950/40 border border-rose-500/40 p-3 rounded-xl">
              {errorMsg}
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
            disabled={loading}
          >
            Hủy Bỏ
          </button>

          <button
            type="button"
            onClick={() => handleGenerate()}
            disabled={loading || !topic.trim()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 transition-all hover:scale-102"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>A.X.E.L Đang Soạn Kịch Bản...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4" />
                <span>Khai Hỏa & Tạo Màn Chơi</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
