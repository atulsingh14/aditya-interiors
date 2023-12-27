/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#110804',
        white: '#fff7e5',
        accent: '#e8a15d',
        accentdark: '#d18e4e',
        border: '#51371d',
        green: '#0d0f07',
      },
    },
  },
  plugins: [],
};
