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
          950: "#05060a",
          900: "#0a0c14",
          800: "#12141f",
          700: "#1b1e2c",
        },
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(135deg, #7c8cff 0%, #33d6c0 100%)",
      },
    },
  },
  plugins: [],
};
