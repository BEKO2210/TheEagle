import React from 'react';
import { FightData } from '../types';

interface FightCardProps {
  fight: FightData;
  index: number;
  onSelect: (fight: FightData) => void;
}

const FightCard: React.FC<FightCardProps> = ({ fight, index, onSelect }) => {
  // Calculate fight number (inverse of index, assuming data is sorted newest first)
  const fightNumber = 29 - index;

  // Determine icon based on method
  const getMethodIcon = (method: string) => {
    const m = method.toLowerCase();
    if (m.includes('submission')) return 'fa-solid fa-handshake-simple-slash'; 
    if (m.includes('ko') || m.includes('tko')) return 'fa-solid fa-burst';
    return 'fa-solid fa-gavel'; 
  };

  return (
    <div 
      className="group relative h-full min-h-[220px] w-full perspective-1000 opacity-0 animate-fade-in-up cursor-pointer"
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={() => onSelect(fight)}
    >
      <div 
        className="block h-full w-full bg-[#0a0a0a] rounded-lg overflow-hidden border border-[#1f1f1f] group-hover:border-eagle-gold/60 transition-all duration-500 ease-out relative shadow-sm group-hover:shadow-[0_10px_40px_-10px_rgba(255,215,0,0.1)] p-6 flex flex-col justify-between"
      >
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-eagle-gold/5 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
        
        {/* Fight Number Badge */}
        <div className="absolute top-4 right-4 text-[60px] leading-none font-anton text-[#111] group-hover:text-[#1a1a1a] transition-colors select-none pointer-events-none z-0">
          #{fightNumber}
        </div>

        <div className="relative z-10">
            {/* Header: Date & Event */}
            <div className="flex items-center gap-3 mb-3">
                <span className="text-eagle-gold font-mono text-[10px] tracking-widest uppercase border border-eagle-gold/20 px-1.5 py-0.5 rounded bg-eagle-gold/5">
                    {fight.datum}
                </span>
                <span className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">
                    {fight.event}
                </span>
            </div>

            {/* Opponent Name */}
            <h3 className="text-2xl md:text-3xl font-anton uppercase text-white tracking-wide mb-1 group-hover:text-eagle-gold transition-colors duration-300">
                {fight.gegner}
            </h3>
            
            {/* Location */}
            <div className="flex items-center gap-1.5 mb-6 opacity-60">
                <i className="fa-solid fa-location-dot text-[10px] text-eagle-gold"></i>
                <span className="text-xs font-rajdhani uppercase tracking-wider text-gray-300">{fight.ort}</span>
            </div>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 border-t border-[#1f1f1f] pt-4 mt-auto relative z-10">
            {/* Method */}
            <div className="col-span-2 flex flex-col">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Method</span>
                <div className="flex items-center gap-2">
                    <i className={`${getMethodIcon(fight.methode)} text-eagle-gold text-xs`}></i>
                    <span className="text-sm font-rajdhani font-semibold text-gray-200 truncate">{fight.methode}</span>
                </div>
            </div>

            {/* Round */}
            <div className="flex flex-col">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Round</span>
                <span className="text-sm font-rajdhani font-semibold text-gray-200">{fight.runde}</span>
            </div>

            {/* Time */}
            <div className="flex flex-col">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Time</span>
                <span className="text-sm font-rajdhani font-semibold text-gray-200">{fight.zeit}</span>
            </div>
        </div>

        {/* Hover Action Indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <i className="fa-solid fa-expand text-eagle-gold text-xl hover:scale-110 transition-transform"></i>
        </div>
      </div>
    </div>
  );
};

export default FightCard;