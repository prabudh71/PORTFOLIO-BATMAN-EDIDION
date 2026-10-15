import React, { useState } from 'react';
import { 
  Cpu, 
  Code2, 
  Palette, 
  FileCode, 
  Layers, 
  Sparkles, 
  Zap, 
  GitBranch, 
  Terminal, 
  Monitor, 
  Wrench, 
  Shield, 
  Gauge,
  SlidersHorizontal
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { soundFx } from '../utils/audioFx';
import BatLogo from './BatLogo';

const iconMap = {
  Cpu,
  Code2,
  Palette,
  FileCode,
  Layers,
  Sparkles,
  Zap,
  GitBranch,
  Terminal,
  Monitor,
  Wrench,
  Shield,
  Gauge,
};

export default function SkillsArsenal() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', ...skillsData.map(c => c.category)];

  const filteredData = activeCategory === 'ALL' 
    ? skillsData 
    : skillsData.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-gotham-900/40 border-t border-gotham-border/60">
      {/* Decorative ambient aura */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-bat-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-gotham-900 border border-gotham-border text-[11px] font-mono text-bat-gold uppercase tracking-widest mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-bat-gold" />
            <span>WAYNETECH TACTICAL LOADOUT // GAUNTLET MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            ARSENAL <span className="text-bat-gold font-mono font-medium text-2xl sm:text-3xl">& SKILLS</span>
          </h2>
          <p className="text-slate-400 font-mono text-xs sm:text-sm mt-3 max-w-xl">
            Modular technical capabilities calibrated for performance, low-level execution, and modern responsive web systems.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bat-gold to-transparent mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider uppercase transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-bat-gold text-black border-bat-gold font-bold shadow-bat-glow-subtle'
                  : 'bg-gotham-950/80 text-slate-300 border-gotham-border hover:border-bat-gold/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((categoryGroup, idx) => (
            <div
              key={idx}
              className="rounded-xl gotham-glass border border-gotham-border hover:border-bat-gold/40 transition-all duration-300 p-6 flex flex-col justify-between group shadow-gotham-card"
            >
              <div>
                {/* Card Header with Tactical Code */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gotham-border/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-bat-gold group-hover:animate-ping" />
                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-bat-gold transition-colors">
                      {categoryGroup.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/60 border border-gotham-border text-slate-400">
                    {categoryGroup.code}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-mono mb-6 leading-relaxed">
                  {categoryGroup.description}
                </p>

                {/* Individual Skill Progress Items */}
                <div className="space-y-4">
                  {categoryGroup.items.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={sIdx}
                        onMouseEnter={() => soundFx.playBeep(1800, 0.02)}
                        className="p-2.5 rounded-lg bg-gotham-950/60 border border-gotham-border/50 hover:border-bat-gold/30 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <IconComponent className="w-4 h-4 text-bat-gold" />
                            <span className="font-mono text-xs font-semibold text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="font-mono text-[11px] font-bold text-bat-gold">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar with Tactical Glow */}
                        <div className="w-full h-1.5 bg-black/80 rounded-full overflow-hidden p-0.5 border border-gotham-border/50">
                          <div
                            className="h-full bg-gradient-to-r from-yellow-600 via-bat-gold to-yellow-300 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(245,197,24,0.6)]"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Tactical Skill Tag */}
                        <div className="flex items-center justify-between mt-1 text-[9px] font-mono text-slate-500">
                          <span>SPEC: {skill.tag}</span>
                          <span className="text-slate-400">OPERATIONAL</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-3 border-t border-gotham-border/40 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-bat-gold" /> READY FOR DEPLOYMENT
                </span>
                <span className="text-bat-gold">CALIBRATED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modular Code Blocks Callout Note */}
        <div className="mt-12 p-4 rounded-xl bg-gotham-900/60 border border-gotham-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-black/60 border border-bat-gold/30">
              <BatLogo className="w-6 h-4" />
            </div>
            <div>
              <p className="font-mono text-xs text-white font-semibold">
                EXTENSIBLE WAYNETECH ARSENAL SCHEMA
              </p>
              <p className="text-xs text-slate-400 font-mono">
                Modular architecture enables adding new frameworks, languages, and low-level tools via <code className="text-bat-gold">src/data/portfolioData.js</code>.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono px-3 py-1 rounded bg-bat-gold/10 text-bat-gold border border-bat-gold/30 uppercase tracking-widest whitespace-nowrap">
            MODULAR & EDIT-READY
          </span>
        </div>

      </div>
    </section>
  );
}
