/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#D62929',
        'primary-yellow': '#FFEB3B',
        'accent-orange': '#FF8C00',
        'accent-green': '#2E8B57',
      },
      backgroundImage: {
        'fire-gradient': 'linear-gradient(to right, #FF8C00, #D62929, #FFEB3B)',
      },
    },
  },
  plugins: [],
}
