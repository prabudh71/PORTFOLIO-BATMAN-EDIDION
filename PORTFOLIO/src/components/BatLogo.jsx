import React from 'react';

export default function BatLogo({ className = "w-8 h-8", glow = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${glow ? 'group' : ''}`}>
      {glow && (
        <div className="absolute inset-0 bg-bat-gold/30 blur-md rounded-full group-hover:bg-bat-gold/50 transition-all duration-300 pointer-events-none" />
      )}
      <svg
        viewBox="0 0 100 55"
        className={`fill-current text-bat-gold drop-shadow-[0_0_8px_rgba(245,197,24,0.4)] ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sleek Dark Knight Bat-Crest Silhouette */}
        <path d="M50 8 C46 0, 43 0, 40 5 C37 11, 35 15, 28 15 C18 15, 6 22, 0 35 C10 33, 20 37, 26 44 C33 52, 40 52, 47 43 C49 40, 51 40, 53 43 C60 52, 67 52, 74 44 C80 37, 90 33, 100 35 C94 22, 82 15, 72 15 C65 15, 63 11, 60 5 C57 0, 54 0, 50 8 Z" />
      </svg>
    </div>
  );
}
