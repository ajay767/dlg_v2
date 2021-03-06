module.exports = {
  important: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
          extradark: '#92400E',
        },
        secondary: {
          DEFAULT: '#2589c7',
          light: '#4abaff',
          dark: '#0c507a',
        },
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
