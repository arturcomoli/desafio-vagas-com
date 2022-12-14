/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-bg": "#663399",
        "btn-blue": "#2F3676",
        "btn-hover": "#191847",
        "disabled-bg": "#C5CFD6",
        "grey-txt": "#555555",
        "light-err": "#F59393",
        "str-err": "#F33232",
        "grey-bg": "#f2f2f2",
        "dark-grey": "#071723",
        "textarea-bg": "#dde3e9",
        "green-success": "#00c57c",
      },
      fontFamily: {
        "test-font": "Inter, sans-serif",
      },
      backgroundImage: {
        logo: "url(./assets/header.png)",
      },
      backgroundPosition: {
        "center-right": "center right",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
