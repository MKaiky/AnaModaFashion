/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sky-custom": "#89cff0",
        "pastel-white": "#f0f4f8",
        "pastel-blue": "#bbd0ff",
        "pastel-yellow": "#fffacd",
        "pastel-green": "#c7e5a1",
        "pastel-pink": "#ffb3b3",
        "pastel-lavender": "#e0b0ff",
        "pastel-brown": "#e0c8b0",
        "pastel-gray": "#d1d1d1",
      },
    },
  },
  plugins: [],
};
