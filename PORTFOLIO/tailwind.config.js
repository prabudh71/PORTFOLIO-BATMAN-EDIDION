/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gotham: {
          950: '#070709',
          900: '#0a0a0d',
          850: '#0f0f14',
          800: '#14141a',
          750: '#1a1a23',
          700: '#22222d',
          600: '#333342',
          border: '#262633',
          lightborder: '#3b3b4f',
        },
        bat: {
          gold: '#f5c518',
          yellow: '#e5a93c',
          amber: '#ffb703',
          darkgold: '#997300',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        display: ['"Cinzel"', '"Cabinet Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'bat-glow': '0 0 25px -5px rgba(245, 197, 24, 0.25)',
        'bat-glow-lg': '0 0 40px -5px rgba(245, 197, 24, 0.35)',
        'bat-glow-subtle': '0 0 15px -3px rgba(245, 197, 24, 0.15)',
        'gotham-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'radar-sweep': 'sweep 4s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'signal-glow': 'signalglow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        signalglow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(245, 197, 24, 0.3))' },
          '100%': { opacity: '0.85', filter: 'drop-shadow(0 0 35px rgba(245, 197, 24, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
