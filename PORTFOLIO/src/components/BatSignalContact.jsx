import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Radio, 
  Copy, 
  Check, 
  ShieldAlert, 
  ExternalLink,
  MessageSquare,
  Lock,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/audioFx';
import BatLogo from './BatLogo';

export default function BatSignalContact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    soundFx.playBeep(1400, 0.1);
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.playBatSignal();
    setTransmitting(true);

    setTimeout(() => {
      setTransmitting(false);
      setTransmitted(true);

      // Open user's email client automatically with pre-filled message
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formState.subject || `Message from ${formState.name} via Batcave Console`
      )}&body=${encodeURIComponent(
        `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
      )}`;
      
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setTransmitted(false);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative bg-gotham-900/60 border-t border-gotham-border/60">
      {/* Bat-Signal circular ambient glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-bat-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-gotham-900 border border-gotham-border text-[11px] font-mono text-bat-gold uppercase tracking-widest mb-3">
            <Radio className="w-3.5 h-3.5 text-bat-gold animate-pulse" />
            <span>ENCRYPTED COMMS // BAT-SIGNAL FREQUENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            TRANSMIT <span className="text-bat-gold font-mono font-medium text-2xl sm:text-3xl">BAT-SIGNAL</span>
          </h2>
          <p className="text-slate-400 font-mono text-xs sm:text-sm mt-3 max-w-xl">
            Direct encrypted frequency to Prabudh Singh Rathore. Reach out for projects, technical collaborations, or engineering queries.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bat-gold to-transparent mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Tactical Comms Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl gotham-glass border border-gotham-border p-6 sm:p-7 relative tech-bracket">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gotham-border">
                <div className="p-2.5 rounded-lg bg-gotham-950 border border-bat-gold/40 text-bat-gold shadow-bat-glow-subtle">
                  <BatLogo className="w-6 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    WAYNETECH COMMS NODE
                  </h3>
                  <p className="font-mono text-xs text-bat-gold">
                    PRIMARY RECEIVER: ONLINE
                  </p>
                </div>
              </div>

              {/* Contact Information items */}
              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-3.5 rounded-lg bg-gotham-950/70 border border-gotham-border flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded bg-gotham-900 text-bat-gold">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">DIRECT INBOX</p>
                      <p className="font-mono text-xs sm:text-sm text-slate-200 truncate">{personalInfo.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded hover:bg-gotham-800 text-slate-400 hover:text-bat-gold transition-colors ml-2 flex-shrink-0"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* University Item */}
                <div className="p-3.5 rounded-lg bg-gotham-950/70 border border-gotham-border flex items-center gap-3">
                  <div className="p-2 rounded bg-gotham-900 text-bat-gold">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">ACADEMIC BASE</p>
                    <p className="font-mono text-xs sm:text-sm text-slate-200">{personalInfo.university}</p>
                    <p className="text-[10px] font-mono text-slate-500">First Year B.Tech Program</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-lg bg-gotham-950/70 border border-gotham-border flex items-center gap-3">
                  <div className="p-2 rounded bg-gotham-900 text-bat-gold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">TACTICAL LOCATION</p>
                    <p className="font-mono text-xs sm:text-sm text-slate-200">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels External Links */}
              <div className="pt-6 mt-6 border-t border-gotham-border">
                <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
                  PUBLIC NETWORK PROFILES
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="p-2.5 rounded-lg bg-gotham-900 hover:bg-gotham-850 border border-gotham-border hover:border-bat-gold/60 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-bat-gold" />
                  </a>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="p-2.5 rounded-lg bg-gotham-900 hover:bg-gotham-850 border border-gotham-border hover:border-bat-gold/60 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-bat-gold" />
                  </a>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="mt-6 p-3 rounded-lg bg-bat-gold/10 border border-bat-gold/30 flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 text-bat-gold flex-shrink-0" />
                <span className="font-mono text-[11px] text-slate-300">
                  Transmissions acknowledged within 24 standard operational hours.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Encrypted Transmission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl gotham-glass border border-gotham-border p-6 sm:p-8 relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gotham-border">
                <div className="flex items-center gap-2 font-mono text-xs text-bat-gold">
                  <Lock className="w-4 h-4" />
                  <span>256-BIT ENCRYPTED TRANSMISSION PROTOCOL</span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/60 border border-gotham-border text-slate-400">
                  PORT: 443_SEC
                </span>
              </div>

              {transmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-bat-gold/20 border-2 border-bat-gold flex items-center justify-center mb-4 shadow-bat-glow">
                    <Check className="w-8 h-8 text-bat-gold" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    SIGNAL TRANSMITTED SUCCESSFULLY
                  </h3>
                  <p className="font-mono text-xs text-slate-300 max-w-md">
                    Transmission beamed to Prabudh's primary receiver. Your default email terminal has also been launched with the encrypted message payload.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Operative Name */}
                    <div>
                      <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-1.5">
                        SENDER / ALLY NAME <span className="text-bat-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Commissioner Gordon"
                        className="w-full px-4 py-2.5 rounded-lg bg-gotham-950 border border-gotham-border focus:border-bat-gold focus:ring-1 focus:ring-bat-gold text-slate-100 font-mono text-xs sm:text-sm placeholder:text-slate-600 outline-none transition-colors"
                      />
                    </div>

                    {/* Operative Email */}
                    <div>
                      <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-1.5">
                        RETURN FREQUENCY (EMAIL) <span className="text-bat-gold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. gordon@gcpd.gov"
                        className="w-full px-4 py-2.5 rounded-lg bg-gotham-950 border border-gotham-border focus:border-bat-gold focus:ring-1 focus:ring-bat-gold text-slate-100 font-mono text-xs sm:text-sm placeholder:text-slate-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Transmission Subject */}
                  <div>
                    <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-1.5">
                      MISSION SUBJECT <span className="text-bat-gold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Software Internship / Technical Collaboration"
                      className="w-full px-4 py-2.5 rounded-lg bg-gotham-950 border border-gotham-border focus:border-bat-gold focus:ring-1 focus:ring-bat-gold text-slate-100 font-mono text-xs sm:text-sm placeholder:text-slate-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Message Payload */}
                  <div>
                    <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-1.5">
                      TRANSMISSION PAYLOAD (MESSAGE) <span className="text-bat-gold">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Detail your requirements, project inquiry, or message for Prabudh..."
                      className="w-full px-4 py-2.5 rounded-lg bg-gotham-950 border border-gotham-border focus:border-bat-gold focus:ring-1 focus:ring-bat-gold text-slate-100 font-mono text-xs sm:text-sm placeholder:text-slate-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={transmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-bat-gold hover:bg-yellow-400 text-black font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-bat-glow hover:shadow-bat-glow-lg flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {transmitting ? (
                      <>
                        <Radio className="w-4 h-4 animate-spin text-black" />
                        <span>ENCRYPTING & TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        <span>DISPATCH BAT-SIGNAL TO PRABUDH</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
