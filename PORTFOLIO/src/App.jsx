import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutDossier from './components/AboutDossier';
import SkillsArsenal from './components/SkillsArsenal';
import ClassifiedProjects from './components/ClassifiedProjects';
import BatSignalContact from './components/BatSignalContact';
import Footer from './components/Footer';
import BatTerminalModal from './components/BatTerminalModal';
import ResumeModal from './components/ResumeModal';
import { soundFx } from './utils/audioFx';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [muted, setMuted] = useState(false);

  const handleToggleMute = () => {
    const isMutedNow = soundFx.toggleMute();
    setMuted(isMutedNow);
    if (!isMutedNow) {
      soundFx.playBeep(1000, 0.05);
    }
  };

  return (
    <div className="min-h-screen bg-gotham-950 text-slate-100 relative selection:bg-bat-gold selection:text-black">
      {/* Batcave Console Navigation */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        muted={muted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Single-Page Sections */}
      <main>
        <Hero 
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        <AboutDossier 
          onOpenResume={() => setResumeOpen(true)}
        />

        <SkillsArsenal />

        <ClassifiedProjects 
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        <BatSignalContact />
      </main>

      {/* Footer */}
      <Footer 
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Interactive Terminal Modal Easter Egg */}
      <BatTerminalModal 
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Classified Resume Modal */}
      <ResumeModal 
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
