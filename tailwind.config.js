/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "Padauk", "sans-serif"],
    },
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        notoSerifJp: ["Noto Serif", "serif"],
      },
      colors: {
        "primary-color": "#CE3319", // red
        "background-color": "#FDF5F4", // white
        "stroke-1-color": "#F8E2DE",
        "stroke-2-color": "#F4CEC8",
        "header-color": "#010102", // black
        "back-ground-color": "#FDF5F4",
      },
      // Neutral Colors
      neutral: {
        800: "#000000", //black
        700: "#292929",
        600: "#686868",
        500: "#A0A0A0",
        400: "#DBDBDB",
        300: "#F2F2F2",
        200: "#FBFBFB",
        100: "#FFFFFF",
      },
      // Special Heading Font Sizes
      fontSize: {
        display1: ["100px", { lineHeight: "120px" }],
        display2: ["72px", { lineHeight: "84px" }],
        display3: ["64px", { lineHeight: "76px" }],
        display4: ["54px", { lineHeight: "64px" }],
        // Heading
        heading1: ["40px", { lineHeight: "48px" }],
        heading2: ["32px", { lineHeight: "40px" }],
        heading3: ["28px", { lineHeight: "40px" }],
        headingF: ["25px", { lineHeight: "40px" }],

        heading4: ["16px", { lineHeight: "auto" }],
        heading3_500: ["24px", { lineHeight: "auto" }],
        heading5: ["18px", { lineHeight: "auto" }],
        // Body
        bodyExtraLarge: ["24px", { lineHeight: "auto" }],
        bodyLarge: ["20px", { lineHeight: "32px" }],
        bodyDefault: ["18px", { lineHeight: "27px" }],
        bodySmall: ["16px", { lineHeight: "24px" }],
        // Card
        cardTitle: [
          "24px",
          {
            lineHeight: "auto",
          },
        ],
        cardPromotion: [
          "20px",
          {
            lineHeight: "auto",
          },
        ],
        cardOriginal: [
          "16px",
          {
            lineHeight: "auto",
          },
        ],
        cardDiscount: [
          "16px",
          {
            lineHeight: "auto",
          },
        ],
      },
    },
  },
  plugins: [],
};
