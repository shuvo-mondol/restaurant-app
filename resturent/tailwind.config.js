/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'custom': '50% 95%',
        'customTow': '50% 93%',
        'customThree': '50% 90%',

      }
    },
  },
  plugins: [],
}

