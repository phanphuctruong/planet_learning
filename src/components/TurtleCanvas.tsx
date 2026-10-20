import React, { useEffect, useRef } from 'react';
import { TurtleAction } from '../utils/pythonRunner';
import { RefreshCw } from 'lucide-react';

interface TurtleCanvasProps {
  commands: TurtleAction[];
  width?: number;
  height?: number;
  onReset?: () => void;
}

export const TurtleCanvas: React.FC<TurtleCanvasProps> = ({
  commands,
  width = 600,
  height = 400,
  onReset,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reset canvas to space radar theme
    ctx.fillStyle = '#050814';
    ctx.fillRect(0, 0, width, height);

    // Draw radar grid lines
    ctx.strokeStyle = '#0e2338';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Origin center
    const centerX = width / 2;
    const centerY = height / 2;

    // Center crosshair
    ctx.strokeStyle = '#1e3a5f';
    ctx.beginPath();
    ctx.moveTo(centerX - 10, centerY);
    ctx.lineTo(centerX + 10, centerY);
    ctx.moveTo(centerX, centerY - 10);
    ctx.lineTo(centerX, centerY + 10);
    ctx.stroke();

    // Turtle state
    let posX = centerX;
    let posY = centerY;
    let headingDeg = 0; // 0 deg is East (+X)
    let isPenDown = true;
    let currentColor = '#00e5ff';
    let isFilling = false;
    let fillPoints: { x: number; y: number }[] = [];

    // Helper: angle to radians
    const toRad = (deg: number) => (deg * Math.PI) / 180;

    // Execute commands
    for (const cmd of commands) {
      switch (cmd.action) {
        case 'color':
          currentColor = String(cmd.params[0] || '#00e5ff');
          if (currentColor === 'cyan') currentColor = '#00e5ff';
          if (currentColor === 'yellow') currentColor = '#facc15';
          if (currentColor === 'darkblue') currentColor = '#1e3a8a';
          break;

        case 'penup':
          isPenDown = false;
          break;

        case 'pendown':
          isPenDown = true;
          break;

        case 'left': {
          const deg = Number(cmd.params[0]) || 90;
          headingDeg = (headingDeg - deg) % 360; // In screen space, counterclockwise is -deg
          break;
        }

        case 'right': {
          const deg = Number(cmd.params[0]) || 90;
          headingDeg = (headingDeg + deg) % 360;
          break;
        }

        case 'forward': {
          const dist = Number(cmd.params[0]) || 50;
          const rad = toRad(headingDeg);
          const nextX = posX + Math.cos(rad) * dist;
          const nextY = posY + Math.sin(rad) * dist;

          if (isPenDown) {
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = 3;
            ctx.shadowColor = currentColor;
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.moveTo(posX, posY);
            ctx.lineTo(nextX, nextY);
            ctx.stroke();
            ctx.shadowBlur = 0; // reset
          }

          if (isFilling) {
            fillPoints.push({ x: nextX, y: nextY });
          }

          posX = nextX;
          posY = nextY;
          break;
        }

        case 'backward': {
          const dist = Number(cmd.params[0]) || 50;
          const rad = toRad(headingDeg);
          const nextX = posX - Math.cos(rad) * dist;
          const nextY = posY - Math.sin(rad) * dist;

          if (isPenDown) {
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(posX, posY);
            ctx.lineTo(nextX, nextY);
            ctx.stroke();
          }

          posX = nextX;
          posY = nextY;
          break;
        }

        case 'circle': {
          const radius = Number(cmd.params[0]) || 40;
          if (isPenDown) {
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = 3;
            ctx.shadowColor = currentColor;
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(posX, posY - radius, Math.abs(radius), 0, Math.PI * 2);
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
          break;
        }

        case 'goto': {
          const targetX = centerX + (Number(cmd.params[0]) || 0);
          const targetY = centerY - (Number(cmd.params[1]) || 0);
          if (isPenDown) {
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(posX, posY);
            ctx.lineTo(targetX, targetY);
            ctx.stroke();
          }
          posX = targetX;
          posY = targetY;
          break;
        }

        case 'dot': {
          const size = Number(cmd.params[0]) || 8;
          ctx.fillStyle = currentColor;
          ctx.beginPath();
          ctx.arc(posX, posY, size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        }

        case 'begin_fill':
          isFilling = true;
          fillPoints = [{ x: posX, y: posY }];
          break;

        case 'end_fill':
          if (isFilling && fillPoints.length > 2) {
            ctx.fillStyle = currentColor + '40'; // semi-transparent fill
            ctx.beginPath();
            ctx.moveTo(fillPoints[0].x, fillPoints[0].y);
            for (let i = 1; i < fillPoints.length; i++) {
              ctx.lineTo(fillPoints[i].x, fillPoints[i].y);
            }
            ctx.closePath();
            ctx.fill();
          }
          isFilling = false;
          fillPoints = [];
          break;
      }
    }

    // Draw Spaceship Turtle Cursor at current position
    ctx.save();
    ctx.translate(posX, posY);
    ctx.rotate(toRad(headingDeg));

    // Spaceship / Turtle shape
    ctx.fillStyle = '#06b6d4';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(12, 0); // nose
    ctx.lineTo(-10, -8);
    ctx.lineTo(-6, 0);
    ctx.lineTo(-10, 8);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Thruster glow
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(-8, 0, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }, [commands, width, height]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 shadow-2xl flex flex-col items-center">
      <div className="w-full bg-slate-900/90 px-3 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>RADAR QUANG HỌC RÙA KHÔNG GIAN (TURTLE CANVAS)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-[11px]">{commands.length} Lệnh vẽ</span>
          {onReset && (
            <button
              onClick={onReset}
              className="text-slate-400 hover:text-white p-1 rounded"
              title="Vẽ lại"
              aria-label="Vẽ lại"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="max-w-full h-auto cursor-crosshair"
      />
    </div>
  );
};
