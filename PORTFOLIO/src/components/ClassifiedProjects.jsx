import React, { useState } from 'react';
import { 
  FolderLock, 
  ExternalLink, 
  Github, 
  ShieldCheck, 
  Terminal, 
  Sparkles, 
  ChevronRight,
  Code2,
  Lock
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { soundFx } from '../utils/audioFx';
import BatLogo from './BatLogo';

export default function ClassifiedProjects({ onOpenTerminal }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative bg-gotham-950/80 border-t border-gotham-border/60">
      {/* Ambient background glow */}
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-bat-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-gotham-900 border border-gotham-border text-[11px] font-mono text-bat-gold uppercase tracking-widest mb-3">
            <FolderLock className="w-3.5 h-3.5 text-bat-gold" />
            <span>SPECIAL OPERATIONS // WAYNETECH LABS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            CLASSIFIED <span className="text-bat-gold font-mono font-medium text-2xl sm:text-3xl">PROJECTS</span>
          </h2>
          <p className="text-slate-400 font-mono text-xs sm:text-sm mt-3 max-w-xl">
            Selected engineering operations spanning front-end web architecture, low-level C programming, and systems performance tuning.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bat-gold to-transparent mt-4" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => {
                soundFx.playBeep(1500, 0.02);
                setHoveredProject(project.id);
              }}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative rounded-2xl gotham-glass border border-gotham-border hover:border-bat-gold/60 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-gotham-card"
            >
              {/* Top Card Badge & Classification Status */}
              <div className="bg-gotham-900/90 border-b border-gotham-border px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-bat-gold group-hover:animate-ping" />
                  <span className="text-bat-gold font-bold tracking-wider">{project.badge}</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-black/50 border border-gotham-border text-slate-300">
                    {project.classification}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-bat-gold transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-bat-yellow/80 mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="p-2 rounded bg-gotham-900 border border-gotham-border/60 group-hover:border-bat-gold/40 text-slate-400 group-hover:text-bat-gold transition-colors">
                      <BatLogo className="w-5 h-4" />
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed my-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-5 space-y-1.5">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs font-mono text-slate-400">
                        <ChevronRight className="w-3.5 h-3.5 text-bat-gold flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gotham-border/50 mb-5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-gotham-950 border border-gotham-border/80 text-[11px] font-mono text-slate-300 group-hover:border-bat-gold/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: GitHub & Live Demo */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playClick()}
                      className="flex-1 py-2.5 px-4 rounded-lg bg-gotham-900 hover:bg-gotham-850 border border-gotham-border hover:border-slate-500 text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Github className="w-4 h-4 text-slate-300" />
                      <span>Source Code</span>
                    </a>

                    <a
                      href={project.liveUrl === "#terminal" ? "#" : project.liveUrl}
                      onClick={(e) => {
                        soundFx.playClick();
                        if (project.liveUrl === "#terminal") {
                          e.preventDefault();
                          onOpenTerminal();
                        }
                      }}
                      className="flex-1 py-2.5 px-4 rounded-lg bg-bat-gold hover:bg-yellow-400 text-black font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-bat-glow-subtle hover:shadow-bat-glow"
                    >
                      {project.liveUrl === "#terminal" ? (
                        <>
                          <Terminal className="w-4 h-4" />
                          <span>Run in Terminal</span>
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </>
                      )}
                    </a>
                  </div>
                </div>
              </div>

              {/* Status bar footer */}
              <div className="bg-gotham-950/80 px-6 py-2 border-t border-gotham-border/50 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>SYSTEM ID: {project.id.toUpperCase()}</span>
                <span className="text-bat-gold/90">{project.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tactical Mission Brief Note */}
        <div className="mt-12 text-center font-mono text-xs text-slate-500">
          <p>
            NEED SPECIFIC RECONNAISSANCE CODE? TRANSMIT AN ENCRYPTED MESSAGE VIA THE BAT-SIGNAL BELOW.
          </p>
        </div>

      </div>
    </section>
  );
}
