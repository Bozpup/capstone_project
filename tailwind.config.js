/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        georgia: ["Georgia", "serif"], // Adding Georgia font
        playfair: ["Playfair Display", "serif"], // Add Playfair Display font
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      screens: {
        xs: { max: "639px" }, // Custom breakpoint for screens smaller than 600px
      },
    },
  },
  plugins: [],
};
