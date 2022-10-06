/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#DFFBF4",
          100: "#BBF6E8",
          200: "#78EDD2",
          300: "#34E4BB",
          400: "#18B490",
          500: "#0F715A",
          600: "#0C5A48",
          700: "#094436",
          800: "#062D24",
          900: "#031712",
        },
      },
    },
  },
  plugins: [],
};
