/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        titleColor: "#333333",
        titleColorDark: "black",
        textColor: "#777777",
        bodyColor: "#fafafa",
        extraBlue: "#242A45",
        extraGrey: "#9194A2",
        extraWhite: "#f7f7f7",
        extraPurple: "#5267DF",
        containerColor: "#fff",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "350px",
        md: "576px",
        lg: "768px",
        iPad: "834px",
        xl: "992px",
        "2xl": "1440px",
      },
    },
    fontSize: {
      bigFontSize: "3.5rem",
      h1FontSize: "2.25rem",
      h2FontSize: "1.5rem",
      h3FontSize: "1.25rem",
      normalFontSize: "1rem",
      smallFontSize: "0.875rem",
      smallerFontSize: "0.813rem",
      tinyFontSize: "0.625rem",
    },
    fontWeight: {
      normalWeight: "400",
      mediumWeight: "500",
      semiBolded: "600",
    },
  },
  plugins: [],
};
