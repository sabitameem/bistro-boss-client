/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#D1A054',
        'button-background': '#835D23',
        "button-hover-bg":'#B58130'
      },
    },
  },
  plugins: [require("daisyui")],
}

