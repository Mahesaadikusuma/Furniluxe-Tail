/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        second: "#1E1E1E",
      },
    },
  },
  plugins: [require("daisyui")],
};
