
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        brand: {
          50: "#e8f4fc",
          100: "#d0e9f9",
          200: "#a3d2f3",
          300: "#75bcec",
          400: "#47a5e6",
          500: "#2e86c1", // Updated to Dark Blue
          600: "#256ca0",
          700: "#1c5178",
          800: "#123750",
          900: "#091c28",
        },
        accent: {
          50: "#f7fbf9",
          100: "#e9f5ef",
          200: "#d4ebdf",
          300: "#a3d9b1", // Updated to Pastel Green
          400: "#7ec594",
          500: "#59b176",
          600: "#3d7b51",
          700: "#2e5d3d",
          800: "#1f3e28",
          900: "#0f1f14",
        },
        lavender: {
          50: "#f8f3fb",
          100: "#f1e7f6",
          200: "#e3cfee",
          300: "#d7bde2", // Added Lavender
          400: "#c99fd7",
          500: "#ba81cc",
          600: "#955da3",
          700: "#70467b",
          800: "#4b2f52",
          900: "#251729",
        },
        yellow: {
          50: "#fefdf5",
          100: "#fdfbeb",
          200: "#fbf7d7",
          300: "#f9f3c3",
          400: "#f6e592",
          500: "#f4d03f", // Added Warm Yellow
          600: "#c3a632",
          700: "#927d25",
          800: "#625319",
          900: "#312a0c",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { 
            opacity: "0",
            transform: "scale(0.95)"
          },
          "100%": { 
            opacity: "1",
            transform: "scale(1)"
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
