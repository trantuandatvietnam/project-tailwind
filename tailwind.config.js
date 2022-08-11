/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        sub: "rgba(255,172,10,.6)",
        main: "#ffd400"
      },
      transparent: 'transparent',
    },
  },
  plugins: [],
}
