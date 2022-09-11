/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Roboto: "'Roboto', sans-serif;",
    },
    colors: {
      blue: "#4C72F1",
      white: "#fff",
      black: "#000",
      transparent: "transparent",
    },
    backgroundImage: {
      "green-to-blue": "linear-gradient(180deg, #5EECC1 0%, #4EACDA 100%)",
    },
    extend: {},
  },
  plugins: [],
};
