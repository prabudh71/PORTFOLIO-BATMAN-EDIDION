import React from 'react';
import { X, Printer, Download, Award, ShieldCheck, Mail, MapPin, Calendar, GraduationCap, Binary, CheckCircle } from 'lucide-react';
import { personalInfo, skillsData, projectsData } from '../data/portfolioData';
import { soundFx } from '../utils/audioFx';
import BatLogo from './BatLogo';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="w-full max-w-4xl my-auto rounded-2xl bg-gotham-950 border border-bat-gold/50 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Modal Controls */}
        <div className="bg-gotham-900 px-6 py-4 border-b border-gotham-border flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded bg-black border border-bat-gold/40">
              <BatLogo className="w-5 h-4" />
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold text-white tracking-wider">
                WAYNETECH DOSSIER // RESUME ARCHIVE
              </h3>
              <p className="text-[10px] font-mono text-bat-gold">SECURITY LEVEL: TOP SECRET / AUTHORIZED</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-bat-gold hover:bg-yellow-400 text-black font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 shadow-bat-glow-subtle"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-gotham-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto text-slate-200 bg-gotham-950 print:bg-white print:text-black">
          {/* Header Block */}
          <div className="border-b-2 border-bat-gold pb-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] text-bat-gold font-bold tracking-widest uppercase">
                WayneTech Personnel Record
              </span>
              <h1 className="text-2xl sm:text-4xl font-display font-black text-white print:text-black tracking-tight mt-1">
                {personalInfo.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm text-slate-300 print:text-slate-700 mt-1">
                {personalInfo.title} | {personalInfo.role}
              </p>
            </div>

            <div className="font-mono text-xs text-slate-400 print:text-slate-600 sm:text-right space-y-1">
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-bat-gold" /> {personalInfo.email}
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-bat-gold" /> DOB: {personalInfo.dob} (Age: {personalInfo.age})
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-bat-gold" /> {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Objective / Dossier Bio */}
          <div className="mb-6">
            <h2 className="font-mono text-xs font-bold text-bat-gold uppercase tracking-wider mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" /> PROFESSIONAL PROFILE
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed bg-gotham-900/50 print:bg-slate-100 p-4 rounded-lg border border-gotham-border print:border-slate-300">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="font-mono text-xs font-bold text-bat-gold uppercase tracking-wider mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> EDUCATION
            </h2>
            <div className="p-4 rounded-lg bg-gotham-900/40 print:bg-slate-50 border border-gotham-border print:border-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-mono text-sm font-bold text-white print:text-black">
                  Bachelor of Technology (B.Tech) - First Year
                </h3>
                <p className="text-xs text-slate-300 print:text-slate-700">
                  {personalInfo.university}, Jaipur, Rajasthan
                </p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-bat-gold/20 text-bat-gold font-semibold print:text-black">
                2024 - 2028 (Expected)
              </span>
            </div>
          </div>

          {/* Technical Arsenal & Skills */}
          <div className="mb-6">
            <h2 className="font-mono text-xs font-bold text-bat-gold uppercase tracking-wider mb-2 flex items-center gap-2">
              <Binary className="w-4 h-4" /> TECHNICAL ARSENAL & SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {skillsData.map((cat, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-gotham-900/50 print:bg-slate-50 border border-gotham-border print:border-slate-300">
                  <h4 className="font-mono text-xs font-bold text-bat-gold mb-2">{cat.category}</h4>
                  <ul className="space-y-1">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-xs text-slate-300 print:text-slate-800 flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-bat-gold/80 flex-shrink-0" />
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Classified Projects */}
          <div>
            <h2 className="font-mono text-xs font-bold text-bat-gold uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> KEY PROJECTS & SYSTEMS
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-gotham-900/40 print:bg-slate-50 border border-gotham-border print:border-slate-300">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono text-xs sm:text-sm font-bold text-white print:text-black">
                      {proj.title}
                    </h4>
                    <span className="font-mono text-[10px] text-bat-gold">{proj.badge}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 mt-1">
                    {proj.description}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 print:text-slate-600 mt-1.5">
                    Stack: {proj.tech.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
