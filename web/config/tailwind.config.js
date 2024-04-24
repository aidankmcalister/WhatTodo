/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-red': '#D92525',
        'main-gray': '#CFD8D7',
        'main-brown': '#453831',
        'main-dark-red': '#D92525',
        'main-dark-gray': '#011627',
      },
    },
  },
  plugins: [],
}
