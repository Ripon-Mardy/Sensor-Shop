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
        "buttonBgColor" : "#218c74",
        "footerColor" : "#2A2D32"
      },
      borderColor : {
        "navBorder" : "#227093"
      },
      textColor : {
        "textNavColor" : "#227093",
        "header_text" : "#454545",
        "para_color" : "#454545"
      },
      fontSize: {
        base: ['14px', { lineHeight: '1.5' }], // Set base font size
        lg: ['18px', { lineHeight: '1.5', fontWeight: '700' }],
      },

    },
  },
  plugins: [],
};
