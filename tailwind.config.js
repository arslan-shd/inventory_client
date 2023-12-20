/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accentRed: "#c3073f",
        magenta: "#950740",
        gray: "#4e4e50",
        brown: "#6f2232",
        grayBlack: "#1A1a1d",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// #1A1a1d -
// #4e4e50 - for text description
// #6f2232 - for highlighting text
//#950740 - for hightlighing nav background
// #c3073f - main accent
