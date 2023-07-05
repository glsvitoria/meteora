/** @type {import('tailwindcss').Config} */
const { blackA, violet } = require("@radix-ui/colors");
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#EE6471",
        secondary: "#F87F46",
        gray: "#CCCCCC",
        yellow: "#DAFF01",
        purple: "#9353FF",
        "font-primary": "#212529",
        gray: "#6C757D",
        ...blackA,
        ...violet,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
