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
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        scaleIn: {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        slideDownNav: {
          "0%": { transform: "translateY(-100%) translateX(-50%)", opacity: 0 },
          "100%": { transform: "translateY(0) translateX(-50%)", opacity: 1 },
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-backwards-slow": "spin-backwards 20s linear infinite",
        slideIn: "slideIn 0.5s ease-in-out",
        slideDownNav: "slideDownNav 1s 1.5s ease-in-out both",
        scaleIn: "scaleIn 1s cubic-bezier(0.11, 0, 0.5, 0) both",
      },
      fontFamily: {
        "aileron-regular": ["Aileron-Regular", ...defaultTheme.fontFamily.sans],
        "aileron-bold": ["Aileron-Bold", ...defaultTheme.fontFamily.sans],
        "aileron-heavy": ["Aileron-Heavy", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
