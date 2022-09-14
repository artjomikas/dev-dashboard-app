/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#cfd6e6',
        'secondary': '#1C1F26',
        'dark': '#17191F',
        'input': '#22252D'

      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}