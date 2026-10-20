import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, Sparkles, Send } from 'lucide-react';
import { runPythonCode, RunResult } from '../utils/pythonRunner';
import { TurtleCanvas } from './TurtleCanvas';
import { sounds } from '../utils/audio';

interface CodePlaygroundProps {
  sampleCode: string;
  explanation: string;
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({
  sampleCode,
  explanation,
}) => {
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [runResult, setRunResult] = useState<RunResult | null>(null);
  const [interactiveInput, setInteractiveInput] = useState('');
  const [userInputs, setUserInputs] = useState<string[]>([]);

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    sounds.playClick();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = (extraInput?: string) => {
    sounds.playLaser();
    setIsRunning(true);

    const inputs = extraInput ? [...userInputs, extraInput] : userInputs;
    if (extraInput) {
      setUserInputs(inputs);
      setInteractiveInput('');
    }

    setTimeout(() => {
      const res = runPythonCode(sampleCode, inputs);
      setRunResult(res);
      setIsRunning(false);
      if (!res.isError) {
        sounds.playSuccess();
      } else {
        sounds.playAlarm();
      }
    }, 250);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono">PHẦN 3:</span> BỘ CODE MẪU VŨ TRỤ (CLEAN & COMMENTED CODE)
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            {explanation}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Đã Sao Chép!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Sao Chép Code</span>
              </>
            )}
          </button>

          <button
            onClick={() => handleRun()}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all hover:scale-102 disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isRunning ? 'Đang Nạp Đạn...' : 'Nạp Đạn & Chạy Code'}</span>
          </button>
        </div>
      </div>

      {/* Code Editor Frame & Live Execution Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Code Block */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl flex flex-col">
          <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 pl-2">space_mission.py</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
              Python 3.10+
            </span>
          </div>

          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[460px] flex-1">
            <code>{sampleCode}</code>
          </pre>
        </div>

        {/* Live Output & Canvas Stage */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          {/* Turtle Canvas if turtle script */}
          {runResult?.isTurtle && runResult.turtleCommands && runResult.turtleCommands.length > 0 && (
            <TurtleCanvas
              commands={runResult.turtleCommands}
              width={480}
              height={320}
              onReset={() => handleRun()}
            />
          )}

          {/* Terminal Console */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl flex flex-col flex-1 min-h-[220px]">
            <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>TERMINAL VŨ TRỤ (STDOUT)</span>
              </div>
              {runResult && (
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  runResult.isError
                    ? 'text-rose-400 bg-rose-950/80 border-rose-500/30'
                    : 'text-emerald-400 bg-emerald-950/80 border-emerald-500/30'
                }`}>
                  {runResult.isError ? 'Phát Hiện Bug' : 'Thành Công 100%'}
                </span>
              )}
            </div>

            <div className="p-4 font-mono text-xs overflow-y-auto flex-1 max-h-[360px] space-y-1">
              {!runResult ? (
                <div className="text-slate-500 italic py-8 text-center flex flex-col items-center gap-2">
                  <Sparkles className="w-6 h-6 text-cyan-500/40 animate-pulse" />
                  <span>Nhấn "Nạp Đạn & Chạy Code" để khởi động trạm không gian.</span>
                </div>
              ) : (
                <>
                  {runResult.stdout.map((line, idx) => (
                    <div
                      key={idx}
                      className={
                        line.startsWith('>')
                          ? 'text-cyan-300 font-bold'
                          : line.startsWith('!') || line.startsWith('⚠️')
                          ? 'text-amber-400'
                          : line.includes('BÁO ĐỘNG') || line.includes('💥')
                          ? 'text-rose-400 font-bold'
                          : 'text-emerald-400'
                      }
                    >
                      {line}
                    </div>
                  ))}
                  {runResult.isError && (
                    <div className="text-rose-400 bg-rose-950/40 p-2 rounded border border-rose-500/40 mt-2">
                      ⚠️ Lỗi: {runResult.errorMessage}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Interactive Terminal Input if script accepts input() */}
            {sampleCode.includes('input(') && (
              <div className="p-2 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 pl-2">&gt;</span>
                <input
                  type="text"
                  value={interactiveInput}
                  onChange={e => setInteractiveInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && interactiveInput.trim()) {
                      handleRun(interactiveInput.trim());
                    }
                  }}
                  placeholder="Gõ phản hồi gửi trạm vũ trụ..."
                  className="flex-1 bg-transparent border-none text-xs text-white placeholder-slate-500 focus:outline-none font-mono"
                  aria-label="Nhập dữ liệu vào terminal"
                />
                <button
                  onClick={() => {
                    if (interactiveInput.trim()) {
                      handleRun(interactiveInput.trim());
                    }
                  }}
                  className="p-1.5 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                  aria-label="Gửi phản hồi vào terminal"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
