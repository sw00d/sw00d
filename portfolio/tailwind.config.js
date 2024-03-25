/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Use class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      boxShadow: {
        "custom-light": "0 0px 20px rgba(255,255,255,0.5)",
        "custom-dark": "0 0px 40px rgba(0,0,0,0.3)",
        caseStudyDark: "0px 0px 15px rgba(255,255,255,0.1)",
        caseStudyLight: "0px 0px 40px rgba(0,0,0,0.2)",
      },
      colors: {
        /**
         * Brand colors, currently only aliased to
         * the default blue colors.
         */
        darkBg: "#121212",
        darkSurface: "#2a2a2a",
        lightSurface: "#fff",
        lightBg: "#ececf3",
        highlight: "#f1c40f",
        highlightSecondary: "#FF5733",
      },
    },
  },
  plugins: [],
};
