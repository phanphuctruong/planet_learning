import React from 'react';

interface AxelAvatarProps {
  mood?: 'excited' | 'warning' | 'thinking' | 'victory' | 'typing';
  isSpeaking?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const AxelAvatar: React.FC<AxelAvatarProps> = ({
  mood = 'excited',
  isSpeaking = false,
  size = 'md',
  className = '',
  onClick,
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
  };

  const eyeColor =
    mood === 'warning'
      ? '#ef4444' // red
      : mood === 'thinking'
      ? '#f59e0b' // amber
      : mood === 'victory'
      ? '#10b981' // emerald
      : '#06b6d4'; // cyan

  return (
    <div
      onClick={onClick}
      className={`relative select-none flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 ${sizeClasses[size]} ${className}`}
      title="A.X.E.L - Autonomous Cyber-Explorer & Logic Master"
      role="img"
      aria-label={`A.X.E.L Robot với tâm trạng ${mood}`}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]"
      >
        <defs>
          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#090d16" />
          </linearGradient>

          <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Antennas */}
        <line x1="100" y1="40" x2="100" y2="15" stroke="#475569" strokeWidth="4" />
        <circle
          cx="100"
          cy="12"
          r="8"
          fill={eyeColor}
          filter="url(#glow)"
          className="animate-pulse"
        />

        {/* Outer Ears / Earphones */}
        <rect x="25" y="80" width="15" height="40" rx="6" fill="#334155" stroke="#64748b" strokeWidth="2" />
        <rect x="160" y="80" width="15" height="40" rx="6" fill="#334155" stroke="#64748b" strokeWidth="2" />
        <circle cx="32" cy="100" r="3" fill={eyeColor} />
        <circle cx="168" cy="100" r="3" fill={eyeColor} />

        {/* Main Head Chassis */}
        <rect
          x="40"
          y="40"
          width="120"
          height="115"
          rx="28"
          fill="url(#metalGrad)"
          stroke="#38bdf8"
          strokeWidth="3"
        />

        {/* Visor Area */}
        <rect
          x="52"
          y="62"
          width="96"
          height="60"
          rx="18"
          fill="url(#visorGrad)"
          stroke="#1e293b"
          strokeWidth="2"
        />

        {/* Eyes according to mood */}
        {mood === 'warning' ? (
          // Warning red slits
          <g filter="url(#glow)">
            <rect x="68" y="82" width="22" height="6" rx="3" fill="#ef4444" />
            <rect x="110" y="82" width="22" height="6" rx="3" fill="#ef4444" />
            <path d="M68 76 L90 80" stroke="#ef4444" strokeWidth="2" />
            <path d="M132 76 L110 80" stroke="#ef4444" strokeWidth="2" />
          </g>
        ) : mood === 'thinking' ? (
          // Thinking spiral / curious dots
          <g filter="url(#glow)">
            <circle cx="78" cy="88" r="9" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 2" className="animate-spin" />
            <circle cx="122" cy="88" r="9" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 2" className="animate-spin" />
          </g>
        ) : mood === 'victory' ? (
          // Victory star eyes
          <g filter="url(#glow)">
            <path d="M 78 78 L 81 85 L 88 86 L 83 91 L 84 98 L 78 94 L 72 98 L 73 91 L 68 86 L 75 85 Z" fill="#10b981" />
            <path d="M 122 78 L 125 85 L 132 86 L 127 91 L 128 98 L 122 94 L 116 98 L 117 91 L 112 86 L 119 85 Z" fill="#10b981" />
          </g>
        ) : (
          // Standard / excited cyan circular eyes
          <g filter="url(#glow)">
            <circle cx="78" cy="88" r="10" fill="#06b6d4" />
            <circle cx="75" cy="85" r="3" fill="#ffffff" />
            <circle cx="122" cy="88" r="10" fill="#06b6d4" />
            <circle cx="119" cy="85" r="3" fill="#ffffff" />
          </g>
        )}

        {/* Mouth Audio Visualizer / Grille */}
        {isSpeaking ? (
          <g className="animate-pulse" filter="url(#glow)">
            <rect x="75" y="105" width="4" height="10" rx="2" fill={eyeColor} />
            <rect x="85" y="102" width="4" height="15" rx="2" fill={eyeColor} />
            <rect x="95" y="100" width="4" height="18" rx="2" fill={eyeColor} />
            <rect x="105" y="103" width="4" height="14" rx="2" fill={eyeColor} />
            <rect x="115" y="106" width="4" height="9" rx="2" fill={eyeColor} />
          </g>
        ) : (
          <g>
            <rect x="78" y="108" width="44" height="5" rx="2.5" fill="#334155" />
            <line x1="84" y1="108" x2="84" y2="113" stroke="#1e293b" strokeWidth="1" />
            <line x1="92" y1="108" x2="92" y2="113" stroke="#1e293b" strokeWidth="1" />
            <line x1="100" y1="108" x2="100" y2="113" stroke="#1e293b" strokeWidth="1" />
            <line x1="108" y1="108" x2="108" y2="113" stroke="#1e293b" strokeWidth="1" />
            <line x1="116" y1="108" x2="116" y2="113" stroke="#1e293b" strokeWidth="1" />
          </g>
        )}

        {/* Cyber Neck collar */}
        <rect x="80" y="155" width="40" height="12" rx="4" fill="#334155" stroke="#475569" strokeWidth="2" />
        <circle cx="90" cy="161" r="2" fill="#38bdf8" />
        <circle cx="100" cy="161" r="2" fill="#38bdf8" />
        <circle cx="110" cy="161" r="2" fill="#38bdf8" />

        {/* Chest Plate peek */}
        <path d="M 60 167 L 140 167 L 155 195 L 45 195 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <text x="100" y="186" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">
          A.X.E.L
        </text>
      </svg>
    </div>
  );
};
