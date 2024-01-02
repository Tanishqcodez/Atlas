/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Varela-Round': 'Varela Round'
      },
      backgroundImage:{
        'hero-backgorund': "url('./img/bg.png')",
        'white-backgorund': "url('./img/white_bg.jpg')"
      }
    },
  },
  plugins: [],
}