import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFBF7",
          100: "#FAF5EC",
          200: "#F3E9D8",
        },
        terracotta: {
          50: "#FDF3EE",
          100: "#FAE3D6",
          200: "#F3C2A4",
          300: "#E89F72",
          400: "#DD7C47",
          500: "#C55F2C",
          600: "#A44A22",
          700: "#7E381B",
          800: "#5A2814",
          900: "#3B1A0D",
        },
        ink: {
          50: "#F5F5F4",
          100: "#E7E5E2",
          400: "#6B655D",
          600: "#443F38",
          800: "#2A2620",
          900: "#1B1814",
        },
        urgent: {
          500: "#D62828",
          600: "#B71F1F",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
