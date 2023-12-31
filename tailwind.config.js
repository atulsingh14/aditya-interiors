/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#110804",
        white: "#fff7e5",
        accent: "#e8a15d",
        accentdark: "#845a31",
        border: "#51371d",
        green: "#0d0f07",
      },
    },
  },
  plugins: [],
};
