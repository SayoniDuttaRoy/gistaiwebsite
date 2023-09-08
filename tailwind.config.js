/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerXs: "768px",
      imageContainer: "640px"
    },
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleFont: ["Inter", "sans-serif"],
        bodyFont: ["Roboto", "sans-serif"],
      },
      colors: {
        bodyColor: "#FFFFFF", // white
        textBlack: "#000000",
        textGrey: "#232115A6",
        textWhite: "#FFFFFF",
        textRed: "#DE483A",
        textBlue: "#0053BD",
        bgRed: "#DE483A",
        bgRedHover: "#FF9F9F",
        bgLightPink: "#FFE4E4"
      }
    },
  },
  plugins: [],
}
