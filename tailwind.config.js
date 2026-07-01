/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f6f4ee', // Warm cream background from the image
          100: '#f0f1ea', // Soft sage-ish white
          200: '#dee0d1',
          300: '#c3c7ae',
          400: '#a4aa87',
          500: '#878f65',
          600: '#6c744f',
          700: '#565d3f', // Deep olive green from buttons
          800: '#464a34',
          900: '#3c3e2e',
          950: '#212219',
        },
        coffee: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#373737',
          900: '#262626', // Charcoal dark from logo palette
          950: '#171717',
        },
        gold: {
          50: '#fcfbfa',
          100: '#f6f4ee',
          200: '#ede9da',
          300: '#ded5be', // Muted khaki
          400: '#caa579',
          500: '#bca374', // Warm ochre gold
          600: '#a1885b',
          700: '#826a47',
          800: '#665239',
          900: '#52402a',
          950: '#372b1c',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.01)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
