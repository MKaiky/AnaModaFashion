/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#9E1B1B', // vermelho elegante
        text: '#111111',
        background: '#F7F7F7',
      },
    },
  },
  plugins: [],
}
