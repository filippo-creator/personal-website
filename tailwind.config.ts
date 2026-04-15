import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#0a0f1e",
        },
        space: {
          black:    "#000000",
          spectral: "#f0f0fa",
          muted:    "rgba(240,240,250,0.65)",
          ghost:    "rgba(240,240,250,0.1)",
          border:   "rgba(240,240,250,0.35)",
          divider:  "rgba(240,240,250,0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        din:  ["var(--font-barlow)", "Arial", "Verdana", "sans-serif"],
      },
      letterSpacing: {
        aerospace: "0.06em",
        mission:   "0.09em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
