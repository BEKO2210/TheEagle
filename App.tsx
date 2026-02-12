import React from 'react';
import Hero from './components/Hero';
import FightGrid from './components/FightGrid';

const App: React.FC = () => {
  return (
    <div className="bg-eagle-black min-h-screen text-white font-sans selection:bg-eagle-gold selection:text-black overflow-x-hidden">
      
      {/* Top Navigation / Brand */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-eagle-gold rounded-sm"></div>
          <span className="font-anton text-xl tracking-wider text-white">KHABIB</span>
        </div>
        <div className="hidden md:flex gap-6 text-xs font-bold font-rajdhani uppercase tracking-widest text-gray-400">
          <span className="hover:text-eagle-gold cursor-pointer transition-colors">Career</span>
          <span className="hover:text-eagle-gold cursor-pointer transition-colors">Stats</span>
          <span className="hover:text-eagle-gold cursor-pointer transition-colors">Gallery</span>
        </div>
      </nav>

      <main className="flex flex-col w-full">
        {/* Hero Section */}
        <Hero />
        
        {/* Content Section */}
        <FightGrid />
      </main>

      {/* Global Grain/Noise Overlay for Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
};

export default App;
