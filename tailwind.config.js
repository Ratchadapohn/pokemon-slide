/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "list-bg": "url('/images/list_bg.jpg')",
        'pokemon-bg': "url('/images/pokemon_bg.png')",
      },

      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left': 'slideLeft 15s linear infinite',
      },
    },
  },
  plugins: [],
};

module.exports = config;

