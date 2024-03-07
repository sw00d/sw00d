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
      colors: {
        /**
         * Brand colors, currently only aliased to
         * the default blue colors.
         */
        darkBg: "#121212",
        lightBg: "#ececf3",
      },
    },
  },
  plugins: [],
};
