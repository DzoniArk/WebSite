import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#0d9488',
        'accent-dark': '#0f766e',
        muted: '#94a3b8',
        gold: '#C5A55A',
        'gold-light': '#E8D48B',
        'gold-dark': '#A68B3A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up-delay-1': 'fade-in-up 0.6s ease-out 0.15s forwards',
        'fade-in-up-delay-2': 'fade-in-up 0.6s ease-out 0.3s forwards',
        'fade-in-up-delay-3': 'fade-in-up 0.6s ease-out 0.45s forwards',
      },
    },
  },
  plugins: [],
}
export default config
