/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FCFCFA",
        cream: "#EFEFEA",
        yellow: "#F8DE6C",
        black: "#060612",
      },
    },
  },
  plugins: [],
};
