/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        textBlue: "#1A53A1",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
