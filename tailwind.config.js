/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1B1A16',
          soft: '#33312B',
        },
        paper: {
          DEFAULT: '#FBF8F1',
          warm: '#F4EFE3',
        },
        cream: '#F4E5BA',
        forest: {
          DEFAULT: '#194208',
          light: '#2B5B14',
          dark: '#0F2A04',
        },
        bright: '#99CC01',
        accent: '#2BCC24',
        gold: {
          DEFAULT: '#D99A56',
          dark: '#B87A3A',
        },
        brown: '#583515',
        signal: '#FFEF27',
      },
      fontFamily: {
        display: ['"Fraunces"', '"Noto Naskh Arabic"', 'serif'],
        sans: ['"Manrope"', '"Tajawal"', 'sans-serif'],
        arabic: ['"Tajawal"', 'sans-serif'],
        arabicDisplay: ['"Noto Naskh Arabic"', 'serif'],
      },
      maxWidth: {
        content: '1400px',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
