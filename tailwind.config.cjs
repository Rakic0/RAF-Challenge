/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "spin-backwards": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-backwards-slow": "spin-backwards 20s linear infinite",
      },
      fontFamily: {
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
