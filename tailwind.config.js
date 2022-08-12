/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "header-height": "var(--header-height)",
        "main-header-height": "var(--main-header-height)",
      },
      width: {
        "logo-wide": "var(--logo-wide)",
      },
      backgroundImage: {
        discount: "linear-gradient(to right,#3bacf0,#1b6dc1)"
      }
    },
    colors: {
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      black: "var(--black-color)",
      white: "var(--white-color)",
      transparent: "transparent",
    },
  },
  plugins: [],
};
