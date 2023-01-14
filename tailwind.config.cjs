/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        primary: "#fdd85f",
        secondary: "#a5c33a",
      },
      keyframes: {
        "spin-backwards": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        slideIn: {
          "0%": { transform: "translateY(15px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-backwards-slow": "spin-backwards 20s linear infinite",
        slideIn: "slideIn 0.5s ease-in-out",
      },
      fontFamily: {
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
