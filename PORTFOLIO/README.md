# 🦇 WayneTech / Batman Gotham-Themed Portfolio

> **"Navigating code in the shadows, building solutions in the light."**

A production-ready, fully responsive, high-performance personal portfolio web application designed for **Prabudh Singh Rathore** (B.Tech 1st Year Student @ JECRC University | Developer & Tech Enthusiast), featuring an authentic **Dark Knight / WayneTech Batcave Console** aesthetic.

---

## 🌐 Live Global Deployment

- **Live URL**: [https://prabudh-gotham-portfolio.surge.sh](https://prabudh-gotham-portfolio.surge.sh)
- **Deployment Status**: Active & Globally Distributed via Edge CDN

---

## ⚡ Key Highlights & Tactical Features

1. **Dark Knight & Batcave Console Aesthetic**:
   - Deep matte black (`#0a0a0d`), charcoal stealth (`#14141a`), metallic Wayne gold (`#f5c518`), and crisp typography.
   - Interactive Bat-Signal atmospheric projection in the hero background.
   - Ambient scanlines, tactical grid coordinates, and corner bracket accents.

2. **Full Responsive Navigation**:
   - Sticky header with an illuminated custom Bat-crest logo.
   - Smooth-scrolling anchors to `About Me`, `Skills & Gadgets`, `Projects`, and `Contact`.
   - Audio FX sound toggle with real-time feedback.
   - Mobile-responsive Batcave drawer navigation.

3. **The Dossier / Personal Record**:
   - WayneTech classified ID file layout with clearance stamps.
   - Quick stats: Full Name, Age (19), Date of Birth (19 March 2008), Primary Email (`prabudh71@gmail.com`), University (`JECRC University`), and Location.
   - One-click copy email button with feedback.

4. **Modular Technical Arsenal & Skills**:
   - **Programming & Web**: C Language, HTML5, CSS3, JavaScript (ES6+).
   - **Frameworks & Tools**: React, Tailwind CSS, Vite, Git / GitHub.
   - **Systems & Software**: OS Optimization, Graphic Tuning, System Troubleshooting.
   - Interactive category filtering (`ALL`, `Programming & Web`, `Frameworks & Tools`, `Systems & Software`).

5. **Classified Projects Showcase**:
   - Hover card illumination, classification badges, and tech stack tags.
   - Live demo links and source code buttons for each project.

6. **Interactive Batcave CLI Terminal (Easter Egg)**:
   - Floating `BAT-CLI` console in the navigation bar and footer.
   - Supports live interactive commands: `help`, `about`, `skills`, `projects`, `contact`, `bat-signal`, `date`, `clear`.

7. **Classified Resume Modal & Printer**:
   - Click "Download Resume" in the Hero or Dossier to launch the WayneTech Classified Resume.
   - One-click "Print / Save PDF" formatted for standard A4 document printing.

8. **Bat-Signal Encrypted Transmission (Contact)**:
   - 256-bit encrypted aesthetic transmission form.
   - Automated client email fallback with pre-filled payload and direct email links.

---

## 🛠️ Local Development & Scripts

### Prerequisites
- Node.js (v18+) & npm

### Commands
```bash
# Install dependencies
npm install

# Start local Vite development server (http://localhost:3000)
npm run dev

# Compile production bundle to /dist
npm run build

# Preview production build locally
npm run preview

# Redeploy live to Surge CDN
npx surge dist prabudh-gotham-portfolio.surge.sh
```

---

## 📁 File Structure

```
PORTFOLIO/
├── index.html                  # HTML entry point with Bat-crest favicon & fonts
├── package.json                # Project dependencies and build scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Custom Gotham color palette & animations
├── postcss.config.js           # PostCSS Tailwind plugins
├── src/
│   ├── main.jsx                # Application root entry
│   ├── App.jsx                 # Top-level layout and modal state
│   ├── index.css               # Batcave scanlines, custom scrollbars, glowing text
│   ├── data/
│   │   └── portfolioData.js    # Modular personal info, skills, projects & commands
│   ├── utils/
│   │   └── audioFx.js          # Web Audio API synthesizer for clicks, beeps, bat-signal
│   └── components/
│       ├── BatLogo.jsx         # Custom SVG Batman crest
│       ├── Navbar.jsx          # Sticky header with audio toggle & mobile drawer
│       ├── Hero.jsx            # Main hero banner & interactive Bat-signal
│       ├── AboutDossier.jsx    # Classified WayneTech personal file
│       ├── SkillsArsenal.jsx   # Interactive categorized tech skills
│       ├── ClassifiedProjects.jsx # Project showcase with hover glow
│       ├── BatSignalContact.jsx# Encrypted transmission form & comms
│       ├── BatTerminalModal.jsx# Interactive CLI easter egg
│       ├── ResumeModal.jsx     # WayneTech classified resume view & print
│       └── Footer.jsx          # Real-time chronometer & return-to-summit button
└── dist/                       # Production-ready compiled assets
```

---

## 🛡️ License & Credits

Built with precision for **Prabudh Singh Rathore**.  
Wayne Enterprises Digital Defense // JECRC University Division.
