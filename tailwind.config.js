/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: "classe",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        burtons : "Burtons",
        lato : "lato",
      },
    },

  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};