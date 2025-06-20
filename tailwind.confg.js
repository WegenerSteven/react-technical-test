// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"League Spartan"', "system-ui", "sans-serif"],
      },
      colors: {
        cyan: {
          50: "#ecfdf5",
          100: "#cffafe",
          700: "#2c3a3f", // Slightly deeper teal for better contrast
        },
        gray: {
          500: "#6b7280",
          800: "#1f2937",
        },
      },
    },
  },
  plugins: [],
};
