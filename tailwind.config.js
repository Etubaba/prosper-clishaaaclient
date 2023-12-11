// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "3xl": "1600px",
      "2xl": "1440px",
      xl: "1280px",
      lg: "1024px",
      md: "860px",
      sm: "576px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      colors: {
        white: "#fff",
        yellow: "#FABE28",
        blue: "#1B4C84",
        darkgrey: "#4B4B4B",
        lightgrey: "#A7AAB1",
        grey: "#DADADA",
        lightdark: "#0F0F0F",
        orange: "#FC9828",
        red: "#EF131A",
        darkpink: "#EE2C4C",
        green: "#39A54A",
        dashboard_bg: "#F3F4F5",
        dashboard_text_color: "#1B4C84",
        yellow_color: "#FC9828",
        dashboard_click_color: "#979797",
        green_color: "#39A54A",
        yellow_card_color: "#FDCE38",
        blue_color: "#1B4C84",
        purple: "#710071",
      },
      dropShadow: {
        md: "0px 4px 4px rgba(0, 0, 0, 0.006)",
      },
      boxShadow: {
        md: "0px 1px 6px 0px #00000091",
      },
      width: {},
    },
  },
  plugins: [],
};
