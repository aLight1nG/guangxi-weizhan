/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#080A10',
        'bg-card': '#161B28',
        'bg-card-hover': '#232B3E',
        'accent-cyan': '#00E5FF',
        'accent-red': '#FF2A55',
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',
        'border-cyan': 'rgba(0,229,255,0.2)',
        'border-cyan-hover': 'rgba(0,229,255,0.5)',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', '"HarmonyOS Sans SC"', '"PingFang SC"', 'sans-serif'],
        body: ['"DM Sans"', '"PingFang SC"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        card: '4px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 229, 255, 0.25)',
        'glow-cyan-lg': '0 0 40px rgba(0, 229, 255, 0.3)',
        'glow-red': '0 0 20px rgba(255, 42, 85, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 12px rgba(0, 229, 255, 0.15)' },
          '50%': { boxShadow: '0 0 24px rgba(0, 229, 255, 0.35)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
