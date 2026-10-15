import React, { useState } from 'react';
import { ArrowDown, ExternalLink, FileText, ShieldAlert, Cpu, Terminal, Compass, Sparkles } from 'lucide-react';
import BatLogo from './BatLogo';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/audioFx';

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const [signalActive, setSignalActive] = useState(false);

  const toggleBatSignal = () => {
    soundFx.playBatSignal();
    setSignalActive(!signalActive);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Bat-Signal Atmospheric Spotlight in Sky */}
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[550px] sm:w-[900px] sm:h-[700px] rounded-full pointer-events-none transition-all duration-1000 ${
          signalActive 
            ? 'bg-radial-gradient opacity-80 scale-110' 
            : 'opacity-40 hover:opacity-60'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(245, 197, 24, 0.18) 0%, rgba(229, 169, 60, 0.05) 45%, transparent 70%)'
        }}
      />

      {/* Gotham Night Sky Grid & Ambient Skyline Lines */}
      <div className="absolute inset-0 bat-grid-bg opacity-70 pointer-events-none" />
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

      {/* Floating Tactical HUD Coordinates */}
      <div className="absolute top-28 left-6 hidden lg:block font-mono text-[11px] text-slate-500 space-y-1">
        <div className="flex items-center gap-2 text-bat-gold/70">
          <span className="w-1.5 h-1.5 rounded-full bg-bat-gold animate-ping" />
          <span>BATCAVE_UPLINK // JAIPUR_GRID</span>
        </div>
        <p>LAT: 26.9124° N | LON: 75.7873° E</p>
        <p>JECRC NODE: ACTIVE // SEC-LEVEL: 01</p>
      </div>

      <div className="absolute top-28 right-6 hidden lg:block font-mono text-[11px] text-slate-500 text-right space-y-1">
        <div className="text-slate-400">STATUS: COMBAT_READY</div>
        <p className="text-bat-gold/80">MEMORY: ZERO_LEAKS</p>
        <p>TERMINAL: READY FOR COMMAND</p>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Interactive Bat-Signal Beacon Button */}
        <div className="inline-flex items-center justify-center mb-6">
          <button
            onClick={toggleBatSignal}
            title="Click to signal the Dark Knight"
            className="group relative px-4 py-1.5 rounded-full bg-gotham-900/90 border border-gotham-border hover:border-bat-gold transition-all duration-300 shadow-lg hover:shadow-bat-glow flex items-center gap-2.5"
          >
            <div className={`transition-transform duration-500 ${signalActive ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
              <BatLogo className="w-5 h-4 text-bat-gold" />
            </div>
            <span className="font-mono text-xs text-slate-300 group-hover:text-bat-gold tracking-widest uppercase">
              {signalActive ? "BAT-SIGNAL ACTIVE IN SKY" : "CLICK TO PROJECT BAT-SIGNAL"}
            </span>
            <span className="w-2 h-2 rounded-full bg-bat-gold animate-pulse" />
          </button>
        </div>

        {/* Tactical Badge */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-bat-gold/60" />
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.25em] text-bat-gold font-semibold uppercase px-2 py-0.5 rounded bg-bat-gold/10 border border-bat-gold/20">
            OFFICIAL BATCAVE ARCHIVE
          </span>
          <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-bat-gold/60" />
        </div>

        {/* Main Heading: PRABUDH SINGH RATHORE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white mb-4 sm:mb-6">
          <span className="block drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            PRABUDH SINGH
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-bat-gold via-yellow-200 to-bat-yellow text-bat-glow tracking-wider mt-1">
            RATHORE
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-lg md:text-xl font-medium text-slate-200 max-w-3xl mx-auto mb-4 tracking-wide font-mono">
          B.Tech 1st Year Student <span className="text-bat-gold">@ JECRC University</span> | Developer & Tech Enthusiast
        </p>

        {/* Dynamic Tagline */}
        <div className="relative inline-block max-w-2xl mx-auto mb-8 sm:mb-10 px-6 py-3 rounded-lg bg-gotham-900/60 border border-gotham-border/80 backdrop-blur-sm">
          <p className="text-xs sm:text-base text-slate-300 italic tracking-wide">
            "{personalInfo.tagline}"
          </p>
        </div>

        {/* Call to Action (CTA) Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {/* CTA 1: View Projects */}
          <a
            href="#projects"
            onClick={() => soundFx.playClick()}
            className="group relative px-6 py-3 rounded-lg bg-bat-gold hover:bg-yellow-400 text-black font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-bat-glow hover:shadow-bat-glow-lg flex items-center gap-2"
          >
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            <span>View Projects</span>
          </a>

          {/* CTA 2: Connect on LinkedIn */}
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="group px-6 py-3 rounded-lg bg-gotham-900 hover:bg-gotham-850 text-slate-200 hover:text-white border border-gotham-border hover:border-bat-gold/60 font-mono font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-sm"
          >
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-4 h-4 text-bat-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* CTA 3: Download Resume */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenResume();
            }}
            className="group px-6 py-3 rounded-lg bg-gotham-900/80 hover:bg-gotham-800 text-slate-200 hover:text-bat-gold border border-bat-gold/30 hover:border-bat-gold font-mono font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-bat-glow-subtle"
          >
            <FileText className="w-4 h-4 text-bat-gold" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Bottom Scroll Indicator & Terminal Hint */}
        <div className="flex flex-col items-center justify-center gap-3">
          <button
            onClick={() => {
              soundFx.playClick();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center text-slate-500 hover:text-bat-gold transition-colors font-mono text-[11px] tracking-widest uppercase group"
          >
            <span className="mb-1 text-slate-400 group-hover:text-bat-gold">INITIATE DOSSIER SCAN</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-bat-gold" />
          </button>
        </div>
      </div>
    </section>
  );
}
