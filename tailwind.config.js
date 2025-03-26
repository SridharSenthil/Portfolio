/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'hero' : '60px',
        'main-title' : '56px',
        'card-title' : '32px',
        'link-text' : '16px',
        'normal-text' : '18px',
      },
      fontFamily: {
        sans: [ 'Manrope', 'sans-serif'],
        bebas: [ 'Bebas Neue', 'sans-serif' ],
      },
      colors: {
        primeText : "#c7c7c7",
        primary: "#d3e97a",
      }
    },
  },
  plugins: [],
}

