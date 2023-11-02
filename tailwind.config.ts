import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      padding: {
        DEFAULT: "25px",
      },
    },

    extend: {
      colors: {
        bgcol: "#F3F3F3",
        black: "#000000",
        lightgray: "#444444",
      },
      fontFamily: {
        neue: ["Neue Haas Grotesk Display Pro", "sans-serif"],
      },
      fontWeight: {
        xxthin: "15",
        xthin: "25",
        light: "45",
        roman: "55",
        medium: "65",
      },
    },
  },
  plugins: [],
};
export default config;
