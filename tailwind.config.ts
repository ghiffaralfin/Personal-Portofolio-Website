import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "4rem",
        lg: "8rem",
        xl: "10rem",
        "2xl": "12rem",
      },
    },
    extend: {
      colors: {
        dark: "#1A1819",
        light: "#F9FAFD",
        btn: "#D9D9D9",
        frame: "#B7B7B7",
        link: "#4BB1DD",
      },
      fontFamily: {
        titles: ["var(--font-rajdhani)"],
        text: ["var(--font-poppins)"],
        button: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
