import React, { useState } from 'react';
import { ShieldCheck, UserCheck, Calendar, Mail, GraduationCap, MapPin, Copy, Check, Fingerprint, Award, Binary, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/audioFx';
import BatLogo from './BatLogo';

export default function AboutDossier({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    soundFx.playBeep(1400, 0.1);
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const dossierFields = [
    { label: "FULL NAME", value: personalInfo.name, icon: UserCheck },
    { label: "AGE", value: `${personalInfo.age} Years`, icon: Award },
    { label: "DATE OF BIRTH", value: personalInfo.dob, icon: Calendar },
    { label: "PRIMARY EMAIL", value: personalInfo.email, icon: Mail, isAction: true },
    { label: "EDUCATION LEVEL", value: personalInfo.education, icon: GraduationCap },
    { label: "ACADEMIC INSTITUTION", value: personalInfo.university, icon: Binary },
    { label: "LOCATION BASE", value: personalInfo.location, icon: MapPin },
    { label: "SECURITY CLEARANCE", value: personalInfo.clearance, icon: ShieldCheck, highlight: true },
  ];

  return (
    <section id="about" className="py-20 relative bg-gotham-950/60 border-t border-gotham-border/60">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-bat-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-gotham-900 border border-gotham-border text-[11px] font-mono text-bat-gold uppercase tracking-widest mb-3">
            <Fingerprint className="w-3.5 h-3.5 text-bat-gold" />
            <span>CONFIDENTIAL ARCHIVES // GCPD & WAYNETECH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            THE DOSSIER <span className="text-bat-gold font-mono font-medium text-2xl sm:text-3xl">/ ABOUT ME</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bat-gold to-transparent mt-4" />
        </div>

        {/* Dossier Tactical Folder Card */}
        <div className="relative rounded-2xl gotham-glass overflow-hidden border border-gotham-border shadow-2xl">
          {/* Top Classified Header Bar */}
          <div className="bg-gotham-900/90 border-b border-gotham-border px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-black/60 border border-bat-gold/30">
                <BatLogo className="w-6 h-4" />
              </div>
              <div>
                <span className="font-mono text-xs text-slate-400">WAYNETECH ARCHIVAL PROTOCOL:</span>
                <h3 className="font-mono text-sm font-bold text-white tracking-wider">
                  CASE FILE #PSR-2008-01
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-red-950/80 text-red-400 border border-red-800/80 font-bold tracking-widest uppercase animate-pulse">
                CLASSIFIED
              </span>
              <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-gotham-800 text-bat-gold border border-gotham-border">
                {personalInfo.status}
              </span>
            </div>
          </div>

          {/* Dossier Content Body */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Biometric Profile Badge & Quick Status */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-left">
              {/* Operative Card Container */}
              <div className="w-full rounded-xl bg-gradient-to-b from-gotham-900 via-gotham-850 to-gotham-950 border border-gotham-border p-6 relative tech-bracket shadow-inner">
                {/* Holographic Watermark */}
                <div className="absolute top-4 right-4 opacity-15 pointer-events-none">
                  <BatLogo className="w-28 h-16" glow={false} />
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-lg bg-gotham-950 border-2 border-bat-gold/60 flex items-center justify-center relative overflow-hidden group shadow-bat-glow-subtle">
                    <BatLogo className="w-10 h-7 text-bat-gold group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bat-gold/20 to-transparent pointer-events-none" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white">
                      {personalInfo.name}
                    </h4>
                    <p className="font-mono text-xs text-bat-gold">
                      {personalInfo.education}
                    </p>
                    <p className="font-mono text-[11px] text-slate-400">
                      {personalInfo.university}
                    </p>
                  </div>
                </div>

                {/* Tactical Stats Pills */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gotham-border/60">
                  {personalInfo.quickStats.map((stat, i) => (
                    <div key={i} className="p-2.5 rounded bg-black/40 border border-gotham-border/40">
                      <p className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">{stat.label}</p>
                      <p className="text-xs font-mono font-bold text-slate-200 mt-0.5">{stat.value}</p>
                      <p className="text-[9px] font-mono text-bat-gold/70">{stat.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Resume Trigger within Card */}
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onOpenResume();
                  }}
                  className="w-full mt-4 py-2.5 rounded-lg bg-gotham-800 hover:bg-bat-gold hover:text-black text-slate-200 font-mono text-xs font-semibold tracking-wider uppercase border border-gotham-border hover:border-bat-gold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>View Full Classified Credentials</span>
                </button>
              </div>

              {/* Batcave Directive Quote */}
              <div className="mt-5 p-4 rounded-lg bg-bat-gold/5 border-l-2 border-bat-gold font-mono text-xs text-slate-300 leading-relaxed">
                <span className="text-bat-gold font-bold">OPERATIVE DIRECTIVE:</span> Master software architecture from the silicon metal up to reactive web interfaces, applying rigorous discipline and precision.
              </div>
            </div>

            {/* Right Column: Profile Narrative & Parameter Grid */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              {/* Profile Narrative */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-mono text-bat-gold uppercase tracking-wider mb-2">
                  <Terminal className="w-4 h-4" />
                  <span>BIOGRAPHICAL SUMMARY</span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  {personalInfo.bio}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Currently diving deep into low-level memory architectures in <span className="text-slate-200 font-medium">C</span>, crafting modern responsive interfaces with <span className="text-slate-200 font-medium">React & Tailwind CSS</span>, and engineering system optimization routines to extract peak hardware performance.
                </p>
              </div>

              {/* Dossier Field Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dossierFields.map((field, idx) => {
                  const Icon = field.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border transition-all ${
                        field.highlight
                          ? 'bg-bat-gold/10 border-bat-gold/40 text-bat-gold'
                          : 'bg-gotham-900/60 border-gotham-border hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                          <Icon className="w-3.5 h-3.5 text-bat-gold" />
                          <span>{field.label}</span>
                        </div>
                        {field.isAction && (
                          <button
                            onClick={handleCopyEmail}
                            title="Copy email to clipboard"
                            className="p-1 rounded hover:bg-gotham-800 text-slate-400 hover:text-bat-gold transition-colors"
                          >
                            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        )}
                      </div>
                      <p className={`font-mono text-xs sm:text-sm font-semibold mt-1 truncate ${
                        field.highlight ? 'text-bat-gold' : 'text-slate-100'
                      }`}>
                        {field.value}
                      </p>
                      {field.isAction && copied && (
                        <span className="text-[10px] font-mono text-green-400 block mt-0.5 animate-in fade-in">
                          Copied to encrypted clipboard!
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
