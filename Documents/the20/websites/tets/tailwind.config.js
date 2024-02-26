/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./module/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", "system-ui", "sans-serif"],
      serif: ["Times New Roman", "system-ui", "serif"],
    },
    extend: {
      brightness: {
        25: ".25",
        75: ".75",
      },
      colors: {
        primary: "#283333",
        secondary: "#535744",
        bbb: "#BBBBBB",
        white: "#FFF",
      },
    },
  },
  plugins: [],
};
