/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'darkblues': 'rgb(31, 31, 44)'
      }
    },
    fontFamily:{
      smallertext:["Bungee Inline"],
      bigtext:["Pragati Narrow"],
      textstyle:["Beau Rivage"]
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}

