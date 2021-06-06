const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#FCFCFC',
      secondary: '#1F3A93',
      base: '#E5E5E5',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      amber: colors.amber,
      blue: colors.blue,
      purple: colors.purple,
    },
    ringColor: {
      orange: colors.orange,
    },
    backgroundColor: (theme) => ({
      ...theme(colors),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
