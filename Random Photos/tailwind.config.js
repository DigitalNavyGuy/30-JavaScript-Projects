/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0 4px 8px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
