/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'sidebar-color': '#033B4A',
      },
      colors: {
        customGreen: '#2DA95C',
      },
    },
  },
  plugins: [],
}