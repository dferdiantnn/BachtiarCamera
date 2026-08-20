import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#07070A',
        foreground: '#F8FAFC',
        racing: {
          neon: '#00FF66',
          purple: '#A855F7',
          cyan: '#00F0FF',
          yellow: '#FFE500',
          red: '#FF1E56',
          dark: '#0B0B10',
          card: '#11121A',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        racing: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'carbon-pattern': 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)',
        'cyber-gradient': 'linear-gradient(135deg, rgba(0, 255, 102, 0.12) 0%, rgba(168, 85, 247, 0.12) 100%)',
        'nitro-glow': 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15), transparent 70%)',
        'speed-blur': 'linear-gradient(90deg, transparent, rgba(0, 255, 102, 0.3), transparent)',
      },
      boxShadow: {
        'neon-green': '0 0 30px -5px rgba(0, 255, 102, 0.5)',
        'neon-purple': '0 0 30px -5px rgba(168, 85, 247, 0.5)',
        'neon-cyan': '0 0 30px -5px rgba(0, 240, 255, 0.5)',
        'neon-yellow': '0 0 30px -5px rgba(255, 229, 0, 0.5)',
        'glass-card': '0 10px 40px -10px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
export default config;
