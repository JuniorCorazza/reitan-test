/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "button": "#4d3426",
        "button-error": "#ab2f2c",
        "button-error-hover": "#c41d18",
      }
    },
  },
  plugins: [],
}

