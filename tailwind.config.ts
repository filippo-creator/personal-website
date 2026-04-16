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
          bg:     "#ffffff",
          subtle: "#f7f6f3",
          hover:  "#f1f1ef",
          border: "#e9e8e4",
          text:   "#37352f",
          muted:  "#9b9a97",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        din:  ["var(--font-inter)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
