const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#01c0f6",
          50: "#effaff",
          100: "#def5ff",
          200: "#b6eeff",
          300: "#75e2ff",
          400: "#2cd4ff",
          500: "#01c0f6",
          600: "#009bd3",
          700: "#007bab",
          800: "#00688d",
          900: "#032a39",
        },
      },
      fontFamily: {
        comfortaa: ["var(--font-comfortaa)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      spacing: {
        "half-vertical": "50vh",
        "half-horizontal": "50vw",
      },
      backdropBrightness: {
        25: ".25",
      },
    },
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      // these will appear in vscode class name autosuggestions
      addUtilities({
        ".link": {
          "@apply underline text-blue-600 hover:text-blue-800": {},
        },
        ".h1": {
          "@apply font-comfortaa text-3xl leading-10 font-bold sm:text-5xl sm:leading-[68px]":
            {},
        },
        ".h2": {
          "@apply font-comfortaa text-2xl sm:text-3xl sm:leading-10": {},
        },
        ".h3": {
          "@apply font-comfortaa text-xl sm:text-2xl": {},
        },
        ".h4": {
          "@apply font-comfortaa text-lg sm:text-xl": {},
        },
        ".h5": {
          "@apply font-comfortaa text-base font-bold sm:text-lg": {},
        },
      });
    },
  ],
};
