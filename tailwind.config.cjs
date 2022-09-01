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
        'dark': '#17191F',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}