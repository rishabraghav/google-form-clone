/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E4FEB",
        secondary: "#f0ebf8",
        tertiary: "rgb(103, 58, 183)",
      },
      boxShadow:{
        '3xl': '0px 2px 4px rgba(0, 0, 0, 0.2)',
      }
      
    },
  },
  plugins: [],
}