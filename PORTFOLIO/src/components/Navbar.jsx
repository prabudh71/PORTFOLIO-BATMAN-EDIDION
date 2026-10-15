import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Menu, X, Shield, Radio } from 'lucide-react';
import BatLogo from './BatLogo';
import { soundFx } from '../utils/audioFx';

export default function Navbar({ onOpenTerminal, muted, onToggleMute }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About Me", href: "#about", id: "about" },
    { name: "Skills & Gadgets", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (href) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gotham-950/90 backdrop-blur-md border-b border-gotham-border shadow-2xl py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Bat Logo & Operative Designation */}
          <a
            href="#"
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-gotham-900 border border-gotham-border group-hover:border-bat-gold/60 transition-colors">
              <BatLogo className="w-8 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black tracking-wider text-sm sm:text-base text-slate-100 group-hover:text-bat-gold transition-colors">
                  PRABUDH
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-bat-gold/10 text-bat-gold border border-bat-gold/30 font-mono hidden xs:inline-block">
                  JECRC
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase hidden sm:block">
                SYS: WAYNETECH HUD // ONLINE
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-gotham-900/80 px-3 py-1.5 rounded-full border border-gotham-border">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-black bg-bat-gold font-bold shadow-[0_0_15px_rgba(245,197,24,0.4)]'
                      : 'text-slate-300 hover:text-bat-gold hover:bg-gotham-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Sound Toggle, Bat Terminal, Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={onToggleMute}
              title={muted ? "Unmute Batcave Audio" : "Mute Batcave Audio"}
              className={`p-2 rounded-lg border transition-all duration-200 ${
                muted
                  ? 'border-gotham-border bg-gotham-900/60 text-slate-500 hover:text-slate-300'
                  : 'border-bat-gold/40 bg-bat-gold/10 text-bat-gold hover:bg-bat-gold/20 shadow-bat-glow-subtle'
              }`}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
            </button>

            {/* Terminal Easter Egg Trigger */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenTerminal();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gotham-900 border border-gotham-border hover:border-bat-gold/50 text-slate-300 hover:text-bat-gold font-mono text-xs transition-all shadow-sm"
              title="Open Batcave Terminal"
            >
              <Terminal className="w-4 h-4 text-bat-gold" />
              <span className="hidden sm:inline">BAT-CLI</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-lg bg-gotham-900 border border-gotham-border text-slate-300 hover:text-bat-gold focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-4 bg-gotham-950/98 border-b border-gotham-border backdrop-blur-xl animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-2 pt-2">
            <div className="text-[10px] font-mono tracking-wider text-bat-gold uppercase px-3 py-1 flex items-center gap-1.5 border-b border-gotham-border/50">
              <Radio className="w-3 h-3 animate-pulse" /> TACTICAL NAVIGATION
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2.5 rounded-lg text-sm font-mono tracking-wide transition-all ${
                  activeSection === link.id
                    ? 'bg-bat-gold text-black font-bold'
                    : 'text-slate-300 hover:bg-gotham-900 hover:text-bat-gold'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gotham-border/50 flex items-center justify-between px-3 text-xs font-mono text-slate-400">
              <span>STATUS: RECONNAISSANCE</span>
              <span className="text-bat-gold">SECURITY: ALPHA</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
