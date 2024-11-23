const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        tx:'#10283f',
        dark:'#37729C',
        df: '#37729C',
        light: '#18548D',
        lighter: '#37729C',
        btn: '#37729C',
      },
    },
  },
  plugins: [],
});


