/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        "custom-blue-1": "#0F70DA",
        "custom-blue-2": "#007AFF",
        "custom-dark": "#2D3748",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
