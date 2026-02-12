import React from 'react';

const LegacySvg: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-48 md:h-64 lg:h-80 flex items-center justify-center overflow-visible z-10">
      <svg
        viewBox="0 0 800 120"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFF8DC" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
        </defs>
        
        {/* Main Text: ALHAMDULILLAH */}
        <text
          x="400"
          y="85"
          textAnchor="middle"
          fontFamily="'Anton', sans-serif"
          fontSize="90"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          className="animate-draw opacity-0"
          style={{ animationDelay: '0.2s', letterSpacing: '0.05em' }}
        >
          ALHAMDULILLAH
        </text>

        {/* Subtext */}
        <text
          x="400"
          y="112"
          textAnchor="middle"
          fontFamily="'Rajdhani', sans-serif"
          fontSize="10"
          fill="#FFD700"
          letterSpacing="8"
          className="animate-fade-in opacity-0"
          style={{ animationDelay: '2.5s' }}
        >
          UNDEFEATED • UNDISPUTED
        </text>
      </svg>
      
      {/* Glow Effect Background */}
      <div className="absolute inset-0 bg-eagle-gold blur-[120px] opacity-10 animate-pulse-slow pointer-events-none rounded-full" />
    </div>
  );
};

export default LegacySvg;