import type { Config } from "tailwindcss";

function themeScale(name: string, steps: number[]) {
  return Object.fromEntries(steps.map((step) => [step, `rgb(var(--${name}-${step}) / <alpha-value>)`]));
}

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores temáticos: cambian según la zona (particulares / profesionales). Ver app/globals.css.
        accent: themeScale("accent", [50, 100, 200, 300, 400, 500, 600, 700]),
        surface: themeScale("surface", [50, 100, 200]),
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
          200: "#D3CFC9",
          400: "#6B655D",
          600: "#443F38",
          700: "#37332D",
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
