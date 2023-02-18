/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: '#fff',
      black: '#000000',
      purple: '#4D1BED',
      hover: '#101014',
      main: '#070709',
      label: '#0E0D15',
      other: '#0b0b0d',
      description: '#A4A4A9',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
