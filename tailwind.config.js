/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
        "neue-machina": "Neue Machinas",
      },
      backgroundImage: {
        casefooter: "url(assets/images/case-banner.svg)",
      },
    },
  },
  plugins: [],
};
