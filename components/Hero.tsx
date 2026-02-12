import React from 'react';
import LegacySvg from './LegacySvg';
import StatsCard from './StatsCard';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 w-full">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none mix-blend-overlay z-0"></div>
      
      {/* Central Content */}
      <div className="relative z-10 w-full max-w-7xl text-center">
        
        <div className="mb-4">
          <span className="inline-block py-1 px-3 border border-eagle-gold/30 rounded-full text-eagle-gold text-xs font-rajdhani tracking-[0.2em] uppercase bg-black/50 backdrop-blur-sm">
            The Eagle Has Landed
          </span>
        </div>

        {/* SVG Animation */}
        <LegacySvg />

        {/* Stats Card */}
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '3.5s' }}>
          <StatsCard />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <i className="fa-solid fa-chevron-down text-eagle-gold text-xl"></i>
      </div>
    </section>
  );
};

export default Hero;