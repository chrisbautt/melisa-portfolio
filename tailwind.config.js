/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // o 'media' para detectar el modo oscuro del SO
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: {
          DEFAULT: "#9333ea",
          light: "#a855f7",
          dark: "#6b21a8",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif"],
        mono: ["JetBrains Mono", "ui-monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0, 0, 0, 0.1)",
        strong: "0 10px 25px rgba(0, 0, 0, 0.15)",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
};
