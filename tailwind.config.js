/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#414f6b',
        secondary:'#a0a7b5',
      },
      fontFamily: {
        lato: "'Lato', serif",
        oswald: "'Oswald', serif"
      }
    },
  },
  plugins: [],
}
