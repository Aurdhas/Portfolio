import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#06B6D4",
        accent: "#F59E0B",
        dark: "#0F0F0F",
        surface: "#1A1A2E",
      },
    },
  },
  plugins: [],
};

export default config;