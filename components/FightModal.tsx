import React, { useEffect, useState } from 'react';
import { FightData } from '../types';

interface FightModalProps {
  fight: FightData | null;
  onClose: () => void;
}

const FightModal: React.FC<FightModalProps> = ({ fight, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (fight) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
  }, [fight]);

  if (!fight) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-2xl bg-[#0a0a0a] border border-eagle-gold/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.1)] transform transition-all duration-500 ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}
      >
        {/* Decorative Header Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-eagle-gold to-transparent"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-500 hover:text-eagle-gold transition-colors p-2"
        >
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>

        <div className="p-8 md:p-12">
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4 opacity-70">
              <span className="text-eagle-gold font-mono tracking-widest uppercase text-sm">{fight.datum}</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span className="text-gray-400 font-rajdhani tracking-widest uppercase text-sm">{fight.event}</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-anton uppercase text-white leading-none mb-2">
              <span className="block text-2xl md:text-3xl text-gray-600 mb-2">VS</span>
              {fight.gegner}
            </h2>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-eagle-gold/80">
              <i className="fa-solid fa-location-dot text-sm"></i>
              <span className="font-rajdhani uppercase tracking-wider text-sm">{fight.ort}</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 border-y border-[#1f1f1f] py-8">
            <div className="text-center p-4 bg-[#111] rounded-lg border border-[#222]">
              <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-2">Method</div>
              <div className="text-white font-rajdhani font-bold text-lg leading-tight">{fight.methode}</div>
            </div>
            <div className="text-center p-4 bg-[#111] rounded-lg border border-[#222]">
              <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-2">Round</div>
              <div className="text-eagle-gold font-anton text-3xl">{fight.runde}</div>
            </div>
            <div className="text-center p-4 bg-[#111] rounded-lg border border-[#222]">
              <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-2">Time</div>
              <div className="text-white font-rajdhani font-bold text-xl">{fight.zeit}</div>
            </div>
          </div>

          {/* Uiverse Video Button */}
          <div className="flex justify-center">
            <a 
              href={fight.videoUrl} 
              target="_blank" 
              rel="noreferrer"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-eagle-gold rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative flex items-center gap-3">
                <i className="fa-brands fa-youtube text-xl"></i>
                <span className="font-rajdhani font-bold uppercase tracking-widest text-lg group-hover:text-black transition-colors">Watch Fight</span>
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FightModal;