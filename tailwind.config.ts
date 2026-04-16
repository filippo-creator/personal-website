import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          white:      "#ffffff",
          warm:       "#f6f5f4",
          ink:        "rgba(0,0,0,0.95)",
          gray500:    "#615d59",
          gray300:    "#a39e98",
          blue:       "#0075de",
          "blue-deep":"#005bab",
          "badge-bg": "#f2f9ff",
          "badge-txt":"#097fe8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "system-ui", "sans-serif"],
        din:  ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        "notion-card": "rgba(0,0,0,0.04) 0px 4px 18px, rgba(0,0,0,0.027) 0px 2.025px 7.84688px, rgba(0,0,0,0.02) 0px 0.8px 2.925px, rgba(0,0,0,0.01) 0px 0.175px 1.04062px",
        "notion-deep": "rgba(0,0,0,0.01) 0px 1px 3px, rgba(0,0,0,0.02) 0px 3px 7px, rgba(0,0,0,0.02) 0px 7px 15px, rgba(0,0,0,0.04) 0px 14px 28px, rgba(0,0,0,0.05) 0px 23px 52px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
