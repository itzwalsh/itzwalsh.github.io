/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        area: "'area-normal', sans-serif",
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        black: 900,
      },
      animation: {
        lineup: "lineup 4s ease-in-out",
      },
      keyframes: {
        lineup: {
          "0%": { opacity: "0", transform: "translateY(80%)" },
          "20%": { opacity: "0" },
          "50%": { opacity: "1", transform: "translateY(0%)" },
          "80%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(0%)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "url('/gray-gradient.png')",
        "transparent-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0), black);",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      darkgray: "#1A1A1A",
      lightgray: "#2B2B2B",
      lightorange: "#FF8A37",
      darkorange: "#C95200",
    },
  },
  plugins: [],
}
