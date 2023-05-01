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
      boxShadow: {
        Nav2xl: "0px 5.33333px 80px rgba(0, 0, 0, 0.1)",
        NavMd: "px 4px 60px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        Roboto: ["Roboto", 'sans-serif'],
      }
    },
  },
  plugins: [],
}