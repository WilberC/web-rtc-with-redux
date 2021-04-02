const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        DEFAULT: colors.black,
        background: "#25272A"
      },
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.purple,
    },
    extend: {
      backgroundImage: theme => ({
        'login-background': "url('./img/background-img.jpeg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}