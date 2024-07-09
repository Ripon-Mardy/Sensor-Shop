/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container : {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1300px",
        },
      },

      backgroundColor : {
        "navBgColor" : "#227093",
        "hoverNavBgColor" : "#4b7bec",
        "buttonBgColor" : "#218c74"
      },
      borderColor : {
        "navBorder" : "#227093"
      },
      textColor : {
        "textNavColor" : "#227093"
      }

    },
  },
  plugins: [],
};
