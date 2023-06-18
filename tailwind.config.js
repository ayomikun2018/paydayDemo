/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm:'540px',
      md: '768px',
      lg: '1024px',
      xl: "1280px",
    },
    extend: {
      colors: {
        blue: '#1C468A',
        orange : '#FC8900',
        ash: '#A4A4A4',
        lightGrey:'#F2F5FA',
        blueLine:'#A7BBDC'
      }
    },
  },
  plugins: [],
}