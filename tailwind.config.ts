import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './**/*.{ts,tsx,js,jsx}', '!./node_modules/**/*'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f3ff',
          100: '#e4e9ff',
          200: '#cdd6fe',
          300: '#aab7fc',
          400: '#8090f8',
          500: '#5664f5',
          600: '#3c43e8',
          700: '#3032cc',
          800: '#292aa6',
          900: '#262884',
          950: '#1b1c4b',
        },
        accent: {
          50: '#effef9',
          100: '#cbfef0',
          200: '#97fce3',
          300: '#5cf5d4',
          400: '#2ce4c2',
          500: '#0bc8a9',
          600: '#06a38a',
          700: '#0a8270',
          800: '#0e675b',
          900: '#10554d',
          950: '#063430',
        },
      },
      animation: {
        blob: 'blob 10s infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
