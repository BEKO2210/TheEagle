import React, { useEffect, useState } from 'react';
import { StatProps } from '../types';

const StatBar: React.FC<StatProps> = ({ label, value, percent }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate bar on mount
    const timer = setTimeout(() => {
      setWidth(percent);
    }, 500);
    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-1">
        <span className="text-eagle-grey text-xs uppercase tracking-wider font-bold">{label}</span>
        <span className="text-eagle-gold font-rajdhani font-bold text-lg">{value}</span>
      </div>
      <div className="h-1.5 w-full bg-eagle-grey/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-eagle-gold to-yellow-600 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${width}%` }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const StatsCard: React.FC = () => {
  return (
    <div className="mt-8 relative group">
      {/* Card Container */}
      <div className="bg-eagle-dark/80 backdrop-blur-md border border-eagle-grey/30 p-6 rounded-xl w-full max-w-sm mx-auto shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-chart-line text-eagle-gold text-sm"></i>
            <h3 className="text-white font-anton tracking-wider text-lg">LEGACY ANALYTICS</h3>
          </div>
          <span className="bg-eagle-gold/10 text-eagle-gold text-[10px] px-2 py-0.5 rounded border border-eagle-gold/20 font-mono">
            UFC REIGN
          </span>
        </div>

        {/* Stats */}
        <StatBar label="Significant Strikes" value="1,128" percent={85} />
        <StatBar label="Takedowns" value="61" percent={65} />
        <StatBar label="Control Time" value="1:28:12" percent={92} />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-eagle-gold/5 blur-xl rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-eagle-gold/30 to-transparent" />
        
        {/* Footer */}
        <div className="mt-4 flex justify-between items-center text-[10px] text-gray-500 font-mono">
          <span>ID: EAGLE_29_0</span>
          <span className="flex items-center gap-1">
            <i className="fa-solid fa-check-circle text-green-500 text-[8px]"></i>
            VERIFIED
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
