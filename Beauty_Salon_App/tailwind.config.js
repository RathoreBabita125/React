/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        beauty: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
}
