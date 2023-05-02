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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1740px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}