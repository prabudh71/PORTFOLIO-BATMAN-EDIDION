import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Shield } from 'lucide-react';
import { terminalCommands, personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/audioFx';
import BatLogo from './BatLogo';

export default function BatTerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'WAYNETECH BTM-OS v4.19 [SECURITY CLEARANCE: LEVEL 5]' },
    { type: 'system', text: 'ALL ARCHIVES LOADED. TYPE "help" TO LIST DIRECTIVES.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      soundFx.playBeep(900, 0.08);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    soundFx.playClick();
    const newHistory = [...history, { type: 'user', text: `root@batcave:~# ${inputVal}` }];

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cmd === 'help') {
      newHistory.push({ type: 'output', text: terminalCommands.help });
    } else if (cmd === 'about' || cmd === 'whoami' || cmd === 'dossier') {
      newHistory.push({ type: 'output', text: terminalCommands.about });
    } else if (cmd === 'skills' || cmd === 'arsenal') {
      newHistory.push({ type: 'output', text: terminalCommands.skills });
    } else if (cmd === 'projects' || cmd === 'missions') {
      newHistory.push({ type: 'output', text: terminalCommands.projects });
    } else if (cmd === 'contact' || cmd === 'signal') {
      newHistory.push({ type: 'output', text: terminalCommands.contact });
    } else if (cmd === 'bat-signal') {
      soundFx.playBatSignal();
      newHistory.push({ type: 'system', text: '>>> [BAT-SIGNAL BEAM PROJECTED 50,000 FEET OVER GOTHAM SKIES] <<<' });
    } else if (cmd === 'date' || cmd === 'time') {
      newHistory.push({ type: 'output', text: `SYSTEM TIME: ${new Date().toISOString()}` });
    } else if (cmd === 'exit' || cmd === 'quit') {
      onClose();
      return;
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${cmd}". Type "help" for a list of tactical directives.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-3xl rounded-xl bg-gotham-950 border border-bat-gold/40 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Terminal Header */}
        <div className="bg-gotham-900 px-4 py-3 border-b border-gotham-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-black border border-bat-gold/30">
              <BatLogo className="w-4 h-3" />
            </div>
            <span className="font-mono text-xs font-bold text-slate-200">
              WAYNETECH // BATCAVE CONSOLE (BTM-OS)
            </span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-1" />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-1 rounded hover:bg-gotham-800 text-slate-400 hover:text-bat-gold transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-2.5 flex-1 bg-gotham-950/95 text-slate-200">
          <div className="text-slate-500 text-[11px] pb-2 border-b border-gotham-border/40">
            Type <span className="text-bat-gold">help</span>, <span className="text-bat-gold">about</span>, <span className="text-bat-gold">skills</span>, <span className="text-bat-gold">projects</span>, <span className="text-bat-gold">contact</span>, or <span className="text-bat-gold">clear</span>.
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'user' && (
                <span className="text-bat-gold font-semibold">{item.text}</span>
              )}
              {item.type === 'system' && (
                <span className="text-yellow-500/80">{item.text}</span>
              )}
              {item.type === 'output' && (
                <pre className="text-slate-300 whitespace-pre-wrap font-mono">{item.text}</pre>
              )}
              {item.type === 'error' && (
                <span className="text-red-400">{item.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-gotham-900 border-t border-gotham-border flex items-center gap-2">
          <span className="text-bat-gold font-mono text-xs font-bold">root@batcave:~#</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type directive here..."
            className="flex-1 bg-transparent text-slate-100 font-mono text-xs sm:text-sm outline-none placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded bg-bat-gold/20 hover:bg-bat-gold text-bat-gold hover:text-black font-mono text-xs font-bold uppercase transition-colors"
          >
            ENTER
          </button>
        </form>
      </div>
    </div>
  );
}
