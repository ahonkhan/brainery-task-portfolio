/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#5E3BEE",
        Heading: "#282938",
        Dribble: "#E62872",
        Body: "#1C1E53",
        Shade: "#F5FCFF"
      },

      fontFamily: {
        Roboto: ["Roboto", 'sans-serif'],
      }
    },
  },
  plugins: [],
}