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
      "light-blue": "#F4F9FE",
      transparent: "transparent",
    },
    backgroundImage: {
      "green-to-blue": "linear-gradient(180deg, #5EECC1 0%, #4EACDA 100%)",
    },
    extend: {
      spacing: {
        "25px": "25px",
        "50px": "50px",
        "75px": "75px",
        "100px": "100px",
        "125px": "125px",
        "150px": "150px",
        "175px": "175px",
        "200px": "200px",
        "225px": "225px",
      },
    },
  },
  plugins: [],
};
