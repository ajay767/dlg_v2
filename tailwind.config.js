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
