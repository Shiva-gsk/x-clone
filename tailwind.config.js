/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'sm': '440px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

