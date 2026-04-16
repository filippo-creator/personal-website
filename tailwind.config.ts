import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          bg:           "var(--notion-bg)",
          warm:         "var(--notion-warm)",
          card:         "var(--notion-card)",
          ink:          "var(--notion-ink)",
          gray500:      "var(--notion-gray500)",
          gray300:      "var(--notion-gray300)",
          border:       "var(--notion-border)",
          ghost:        "var(--notion-ghost)",
          "ghost-hover":"var(--notion-ghost-hover)",
          blue:         "var(--notion-blue)",
          "blue-deep":  "var(--notion-blue-deep)",
          "badge-bg":   "var(--notion-badge-bg)",
          "badge-txt":  "var(--notion-badge-txt)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "system-ui", "sans-serif"],
        din:  ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        "notion-card": "var(--notion-shadow-card)",
        "notion-deep": "var(--notion-shadow-deep)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
