/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3066be",
        secondary: "#00c9a7",
        tertiary: "#f5f9ff"
      },
      gap: {
        "18": "4.5rem",
      }
    },
  },
  plugins: [],
}

