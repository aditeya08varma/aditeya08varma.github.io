/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#08090a",
          900: "#0d0e0f",
          800: "#141516",
          700: "#1c1e1f",
        },
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(135deg, #f0a84e 0%, #4ade80 100%)",
      },
    },
  },
  plugins: [],
};
