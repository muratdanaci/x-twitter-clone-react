/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        box: "rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px"
      }
    },
  },
  plugins: [],
}

