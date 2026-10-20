import React, { useState } from 'react';
import { LessonPlan } from '../types';
import { formatLessonToMarkdown } from '../utils/engine';
import { Copy, Check, Download, X, FileText } from 'lucide-react';
import { sounds } from '../utils/audio';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: LessonPlan;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  lesson,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const markdownText = formatLessonToMarkdown(lesson);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownText);
    setCopied(true);
    sounds.playClick();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    sounds.playLaser();
    const blob = new Blob([markdownText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${lesson.id}-${lesson.overview.lessonNumber}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700 p-6 md:p-8 shadow-2xl space-y-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/40">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Xuất Kịch Bản Bài Giảng E-Learning (Markdown)
              </h3>
              <p className="text-xs text-slate-400">
                Chuẩn hóa cấu trúc 4 phần theo phương pháp Gamification & mô hình 5E
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
            aria-label="Đóng cửa sổ xuất file"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Markdown preview */}
        <div className="flex-1 overflow-hidden flex flex-col space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Định dạng: Markdown (.md) chuẩn giáo án</span>
            <span>{markdownText.length} ký tự</span>
          </div>

          <pre className="flex-1 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-y-auto leading-relaxed select-all">
            <code>{markdownText}</code>
          </pre>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
          >
            Đóng
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Đã Sao Chép!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Sao Chép Markdown</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải Tệp .md</span>
          </button>
        </div>
      </div>
    </div>
  );
};
