import React, { useState, useEffect } from 'react';
import { ChevronUp, Shield, Radio, Terminal, Heart } from 'lucide-react';
import BatLogo from './BatLogo';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/audioFx';

export default function Footer({ onOpenTerminal }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toTimeString().split(' ')[0] + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundFx.playBatSignal();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-gotham-border/80 py-12 overflow-hidden text-slate-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gotham-border/50">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-gotham-900 border border-bat-gold/30">
              <BatLogo className="w-7 h-5" />
            </div>
            <div>
              <p className="font-display font-bold text-white text-sm tracking-wider">
                PRABUDH SINGH RATHORE
              </p>
              <p className="text-[11px] text-bat-gold">
                WAYNETECH DIGITAL DEFENSE // JECRC DIVISION
              </p>
            </div>
          </div>

          {/* Real-time System HUD Clock */}
          <div className="flex items-center gap-4 bg-gotham-950 px-4 py-2 rounded-lg border border-gotham-border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bat-gold animate-ping" />
              <span className="text-[11px] text-slate-300">BATCAVE CHRONO:</span>
            </div>
            <span className="text-bat-gold font-bold">{currentTime || '04:45:00 IST'}</span>
          </div>

          {/* Back to Top Bat-Signal Trigger */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gotham-900 hover:bg-bat-gold text-slate-300 hover:text-black border border-gotham-border hover:border-bat-gold transition-all duration-200"
            title="Return to Batcave Summit"
          >
            <span className="text-xs font-semibold">ASCEND TO SUMMIT</span>
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Prabudh Singh Rathore. All Gotham operations operational.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenTerminal();
              }}
              className="hover:text-bat-gold transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-bat-gold" />
              <span>TERMINAL MODE</span>
            </button>
            <span>•</span>
            <span className="text-slate-400">JECRC UNIVERSITY, JAIPUR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
