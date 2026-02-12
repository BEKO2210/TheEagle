import React, { useState } from 'react';
import { fightHistory } from '../data/fights';
import FightCard from './FightCard';
import FightModal from './FightModal';
import { FightData } from '../types';

const FightGrid: React.FC = () => {
  const [selectedFight, setSelectedFight] = useState<FightData | null>(null);

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-12 w-full bg-[#050505] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-eagle-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Premium Section Header */}
        <div className="mb-24 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-4 mb-4 opacity-70">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-eagle-gold"></div>
            <span className="text-eagle-gold text-xs font-rajdhani uppercase tracking-[0.3em]">The History of Violence</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-eagle-gold"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-anton text-white uppercase tracking-tight mb-6 relative">
            Undisputed <span className="text-transparent bg-clip-text bg-gradient-to-b from-eagle-gold to-[#8B7500]">Legacy</span>
          </h2>
          
          <p className="text-gray-400 font-rajdhani text-lg md:text-xl max-w-2xl leading-relaxed">
            A chronological archive of dominance. Every round, every submission, every victory crafted in the octagon.
          </p>

          <div className="mt-8 py-3 px-8 border border-eagle-gold/30 rounded-full bg-black/40 backdrop-blur-sm flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Official Record</span>
             <div className="w-px h-4 bg-eagle-grey"></div>
             <div className="text-eagle-gold text-2xl font-anton tracking-wide">29 - 0 - 0</div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {fightHistory.map((fight, index) => (
            <FightCard 
              key={`${fight.datum}-${index}`} 
              fight={fight} 
              index={index} 
              onSelect={setSelectedFight}
            />
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-32 text-center pt-10 border-t border-eagle-grey/30">
          <div className="mb-6">
            <i className="fa-solid fa-quote-left text-eagle-gold/30 text-2xl mb-4 block"></i>
            <p className="text-gray-300 font-rajdhani text-lg italic max-w-2xl mx-auto">
              "I don't fight for the money. I fight for my legacy. I fight for history. I fight for my people."
            </p>
          </div>
          <div className="flex justify-center gap-8 mt-8">
             <a href="#" className="text-eagle-gold hover:text-white transition-all transform hover:scale-110">
               <i className="fa-brands fa-instagram text-2xl"></i>
             </a>
             <a href="#" className="text-eagle-gold hover:text-white transition-all transform hover:scale-110">
               <i className="fa-brands fa-twitter text-2xl"></i>
             </a>
             <a href="#" className="text-eagle-gold hover:text-white transition-all transform hover:scale-110">
               <i className="fa-brands fa-youtube text-2xl"></i>
             </a>
          </div>
          <p className="mt-10 text-[10px] text-gray-700 uppercase tracking-widest">
            The Eagle Legacy • Tribute Application • {new Date().getFullYear()}
          </p>
        </div>

      </div>

      {/* Modal Overlay */}
      <FightModal fight={selectedFight} onClose={() => setSelectedFight(null)} />
    </section>
  );
};

export default FightGrid;