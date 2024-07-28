/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2233',
        primaryDark: '#161822',
        heading: '#88d1ef',
        underlined: '#98BF64'
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]
      }
    },
  },
  plugins: [],
}

