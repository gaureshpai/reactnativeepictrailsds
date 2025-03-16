/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx,mdx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        magenta: {
          900: "#50003F",
          800: "#691869",
          700: "#A21998",
          600: "#C26AA5",
          500: "#E142BC",
          400: "#F877D2",
          300: "#FFACE5",
          200: "#FFCEF2",
          100: "#FFDFE3",
          50: "#FEFEF9",
        },
        purple: {
          900: "#3A1659",
          800: "#633A95",
          700: "#7C3EC3",
          600: "#9D44E7",
          500: "#A964F7",
          400: "#C49CF9",
          300: "#DDB9FF",
          200: "#EED5FF",
          100: "#F2E3FF",
          50: "#F9F1FF",
        },
        blue: {
          900: "#002661",
          800: "#194A83",
          700: "#175BCC",
          600: "#266EF1",
          500: "#068BEE",
          400: "#6DAAFB",
          300: "#A9C9FF",
          200: "#CDDEFF",
          100: "#DEE9FE",
          50: "#EFF4FE",
        },
        // Add other colors similarly...
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          900: "#282828",
          800: "#4B4B4B",
          700: "#5E5E5E",
          600: "#727272",
          500: "#868686",
          400: "#A6A6A6",
          300: "#BBBBBB",
          200: "#DDDDDD",
          100: "#E8E8E8",
          50: "#F3F3F3",
        },
        buttons:{
          "primary-default": "#1F1F1F",
          "primary-pressed": "#000000",
          "primary-disabled": "#A6A6A6",
          "primary-hover": "#4B4B4B",
        }
      },
      
    },
    
  },
  plugins: [],
};
