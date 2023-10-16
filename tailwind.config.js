/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Customize font families
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      // Customize colors
      colors: {
        primary: "#191B41",
        secondary: "#F3DE42",
      },

      // Customize container padding
      container: {
        center: true,
        padding: {
          DEFAULT: "0.87rem", // 16px
          sm: "1.5rem", // 24px
          md: "1.5rem", // 32px
          lg: "3rem", // 48px
          xl: "4rem", //  64px
          "2xl": "8rem", // 128px
        },
      },
    },
  },
  plugins: [],
};
