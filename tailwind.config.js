/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat-Medium', 'sans-serif'],
        'montserrat-black': ['Montserrat-Black', 'sans-serif'],
        'montserrat-light': ['Montserrat-Light', 'sans-serif'],
        'montserrat': ['Montserrat-Medium', 'sans-serif']
      }
    },
  },
  plugins: [],
}

