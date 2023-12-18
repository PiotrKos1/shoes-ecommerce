const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#404040',
        'text-color': '#FF9686',
        'third-color': '#FFF'
      }
    },
  },
  plugins: [],
}

