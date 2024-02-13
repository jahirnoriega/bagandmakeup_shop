/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      janeth: ["'Signika', sans-serif"],
      title: ["'Playfair Display', serif;"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#8664BB",
      secondary: "#FAD3D5",
      third: "#FFECB7",
      fourth: "#C88E99",
      grey: "#7D7C7C",
    },
  },
  plugins: [],
};
