/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        marker: ["Permanent Marker", "serif"], // Add Google Font with a fallback
      },
    },
  },
  plugins: [],
};
