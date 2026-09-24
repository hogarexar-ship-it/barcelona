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
        // Naranja de marca (definitivo: #CE6A27). Ver app/globals.css para los valores exactos de cada paso.
        accent: themeScale("accent", [50, 100, 200, 300, 400, 500, 600, 700]),
        surface: themeScale("surface", [50, 100, 200]),
        cream: {
          50: "#FDFBF7",
          100: "#FAF5EC",
          200: "#F3E9D8",
        },
        // Azul de marca, solo para usos secundarios (nunca botones ni CTA principales).
        navy: {
          DEFAULT: "#122865",
          600: "#0D1D4B",
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
        xl2: "0.625rem",
      },
    },
  },
  plugins: [],
};

export default config;
