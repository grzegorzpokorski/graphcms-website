/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      xxl: "1320px",
    },
    extend: {
      colors: {
        // "green": "#00C865",
      },
      fontFamily: {
        // sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
