/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6a1b9a",
        secondary: "#4f46e5",
        background: "#fafaf8",
        card: "#ffffff",
        textPrimary: "#0e0c1a",
        textSecondary: "#4a4869",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        cabinet: ["Cabinet Grotesk", "sans-serif"],
      },
      borderRadius: {
        'card': '16px',
      }
    },
  },
  plugins: [],
};
