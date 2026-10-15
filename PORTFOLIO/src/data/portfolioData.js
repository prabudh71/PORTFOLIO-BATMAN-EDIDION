export const personalInfo = {
  name: "Prabudh Singh Rathore",
  alias: "THE DARK KNIGHT DEVELOPER",
  title: "B.Tech 1st Year Student @ JECRC University",
  role: "Developer & Tech Enthusiast",
  tagline: "Navigating code in the shadows, building solutions in the light.",
  dossierTitle: "The Dossier / Classified Personnel Record",
  status: "ACTIVE OPERATIVE // LEVEL 1 RECRUIT",
  clearance: "WAYNETECH LEVEL 5 (CLASSIFIED)",
  dob: "19 March 2008",
  age: 19,
  email: "prabudh71@gmail.com",
  education: "B.Tech First Year Student",
  university: "JECRC University",
  location: "Jaipur, Rajasthan, India",
  affiliation: "Wayne Enterprises Digital Defense // JECRC Division",
  bio: "Prabudh Singh Rathore is an ambitious and enthusiastic first-year B.Tech undergraduate at JECRC University with an unrelenting curiosity for software engineering, modern web architectures, low-level systems, and algorithmic problem-solving. Bridging tactical systems optimization with cutting-edge UI engineering, he works tirelessly to build robust, elegant, and performance-driven digital solutions.",
  socials: {
    email: "mailto:prabudh71@gmail.com",
    linkedin: "https://www.linkedin.com/in/prabudh-singh-rathore",
    github: "https://github.com/prabudhrathore",
    terminal: "#terminal",
  },
  quickStats: [
    { label: "ACADEMIC RANK", value: "B.Tech Year 1", detail: "JECRC University" },
    { label: "SECURITY CLEARANCE", value: "Top Secret", detail: "WayneTech Certified" },
    { label: "CORE FOCUS", value: "Web & Systems", detail: "C / JS / React" },
    { label: "TACTICAL STATUS", value: "100% Ready", detail: "Open to Collaborations" },
  ]
};

export const skillsData = [
  {
    category: "Programming & Web",
    code: "SEC-LANG-01",
    description: "Core syntactic foundations & internet protocol languages engineered for speed and precision.",
    items: [
      { name: "C Language", level: 85, tag: "Low-Level & Memory", icon: "Cpu" },
      { name: "HTML5", level: 95, tag: "Semantic DOM & A11y", icon: "Code2" },
      { name: "CSS3 / Modern CSS", level: 92, tag: "Animations & Responsive", icon: "Palette" },
      { name: "JavaScript (ES6+)", level: 88, tag: "Async & Modern DOM", icon: "FileCode" },
    ]
  },
  {
    category: "Frameworks & Tools",
    code: "SEC-TOOL-02",
    description: "Modern developer arsenals deployed for rapid tactical component creation and version control.",
    items: [
      { name: "React", level: 86, tag: "Components & Hooks", icon: "Layers" },
      { name: "Tailwind CSS", level: 94, tag: "Utility-First Styling", icon: "Sparkles" },
      { name: "Vite", level: 90, tag: "Next-Gen Bundling", icon: "Zap" },
      { name: "Git / GitHub", level: 85, tag: "VCS & Collaboration", icon: "GitBranch" },
    ]
  },
  {
    category: "Systems & Software",
    code: "SEC-SYS-03",
    description: "Deep workstation tuning, graphic pipeline optimization, and low-latency system diagnostics.",
    items: [
      { name: "OS Optimization", level: 92, tag: "Kernel, Services & Latency", icon: "Terminal" },
      { name: "Graphic Tuning", level: 88, tag: "Driver & Pipeline Config", icon: "Monitor" },
      { name: "System Troubleshooting", level: 90, tag: "Diagnostics & Debugging", icon: "Wrench" },
    ]
  }
];

export const projectsData = [
  {
    id: "gotham-portfolio",
    title: "Personal Gotham-Themed Portfolio",
    classification: "CLASS: OMEGA",
    status: "DEPLOYED // OPERATIONAL",
    subtitle: "Dark Knight / WayneTech Single-Page Web Console",
    description: "A high-performance, dark-aesthetic personal dossier built with React, Vite, and Tailwind CSS. Features dynamic Batcave scanlines, custom Web Audio API synthesized feedback, interactive WayneTech CLI terminal, and classified dossier reader.",
    tech: ["React", "Vite", "Tailwind CSS", "Web Audio API", "Lucide Icons"],
    githubUrl: "https://github.com/prabudhrathore/gotham-portfolio",
    liveUrl: "#",
    badge: "FEATURED ARSENAL",
    highlights: [
      "Custom responsive Gotham City theme with Bat-gold accents",
      "Interactive Bat-Terminal modal easter egg with built-in commands",
      "Web Audio sound effect synthesizer with zero external assets",
      "WayneTech Classified Dossier printable/downloadable format"
    ]
  },
  {
    id: "c-utility-suite",
    title: "C Programming Utility & Algorithm Suite",
    classification: "CLASS: DELTA",
    status: "SYSTEM UTILITY",
    subtitle: "High-Performance Low-Level Algorithms & CLI Toolkit",
    description: "A modular collection of high-efficiency C utility programs and core data structures designed for memory optimization, terminal diagnostics, string parsing, and algorithmic speed benchmarks.",
    tech: ["C Language", "Data Structures", "Memory Management", "Algorithms", "CLI"],
    githubUrl: "https://github.com/prabudhrathore/c-utility-suite",
    liveUrl: "#terminal",
    badge: "LOW-LEVEL ARSENAL",
    highlights: [
      "Optimized memory-safe pointers and dynamic memory management",
      "Custom algorithmic sorting and searching implementations",
      "Lightweight CLI utilities for Unix/Windows system queries",
      "Comprehensive performance benchmarks against standard libraries"
    ]
  },
  {
    id: "bat-sys-tuner",
    title: "Bat-Sys OS & Hardware Performance Tuner",
    classification: "CLASS: BETA",
    status: "HARDWARE ADAPTIVE",
    subtitle: "System Latency Reducer & Graphics Pipeline Scripting",
    description: "An automated workstation tuning protocol designed to disable telemetry bloatware, optimize thread scheduling, configure GPU driver power curves, and lower DPC frame latency for mission-critical software workflows.",
    tech: ["PowerShell", "Batch Scripting", "OS Architecture", "GPU Optimization"],
    githubUrl: "https://github.com/prabudhrathore/bat-sys-tuner",
    liveUrl: "#skills",
    badge: "SYSTEM GADGET",
    highlights: [
      "Streamlines background services for maximum CPU thread priority",
      "Automates clean GPU driver cache purges and refresh rate locking",
      "Real-time system health checks and temperature watchdog"
    ]
  },
  {
    id: "bat-signal-dispatcher",
    title: "Bat-Signal Encrypted Dispatcher",
    classification: "CLASS: ALPHA",
    status: "SECURE COMMS",
    subtitle: "Instant Wayne Enterprises Encrypted Transmission Node",
    description: "An encrypted client-side communication portal allowing allies, recruiters, and collaborators to transmit high-priority messages directly to Prabudh's primary receiver via automated SMTP fallback and instant verification.",
    tech: ["JavaScript", "Async Handlers", "Client Encryption", "Tailwind CSS"],
    githubUrl: "https://github.com/prabudhrathore/encrypted-dispatcher",
    liveUrl: "#contact",
    badge: "COMMS ARSENAL",
    highlights: [
      "Real-time client input verification and anti-spam protocols",
      "Encrypted transmission animation with terminal audio confirmations",
      "Instant 1-click clipboard synchronization for email transmission"
    ]
  }
];

export const terminalCommands = {
  help: "Available commands:\n  • about     - View Prabudh's classified dossier\n  • skills    - Display technical arsenal & gadget ratings\n  • projects  - List active classified WayneTech projects\n  • contact   - Open secure encrypted frequency\n  • clear     - Purge terminal screen buffer\n  • bat-signal - Illuminate the sky over Gotham",
  about: `NAME: Prabudh Singh Rathore\nROLE: B.Tech 1st Year Student @ JECRC University\nCLEARANCE: WayneTech Digital Defense Level 5\nDOB: 19 March 2008 (Age: 19)\nSTATUS: Navigating code in the shadows, building solutions in the light.`,
  skills: `ARSENAL SUMMARY:\n- C Language [85%]\n- HTML5 / CSS3 / JavaScript [92%]\n- React / Tailwind CSS / Vite [88%]\n- OS Optimization & System Troubleshooting [90%]`,
  projects: `ACTIVE MISSIONS:\n1. Gotham-Themed Portfolio (React/Vite/Tailwind)\n2. C Utility Tools & Algorithms (C/CLI)\n3. Bat-Sys OS & Hardware Tuner (Scripts/Latency)\n4. Bat-Signal Encrypted Dispatcher (Comms)`,
  contact: `SECURE FREQUENCY:\n- Email: prabudh71@gmail.com\n- University: JECRC University, Jaipur\n- Comms Status: OPEN FOR MISSIONS & INTERNSHIPS`,
};
