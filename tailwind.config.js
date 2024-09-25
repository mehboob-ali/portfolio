/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poiret: ["PoiretOne", "sans-serif"],
      },
      fontFamily: {
        universe: ["Universe", "sans-serif"],
      },
    },
  },
  plugins: [],
}