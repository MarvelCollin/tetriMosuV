/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-stop': 'spin 2s linear infinite, stopSpin 0.5s ease-out forwards',
        'logo-expand-smooth': 'expandLogo 0.3s ease-out forwards',
      },
      keyframes: {
        stopSpin: {
          'to': {
            'animation-timing-function': 'ease',
            'transform': 'rotate(0deg)',
          },
        },
        expandLogo: {
          '0%': {
            transform: 'scale(1) rotate(var(--rotation))',
          },
          '100%': {
            transform: 'scale(50) rotate(var(--rotation))',
            opacity: '0',
          },
        },
      },
    },
    colors: {
      // #00112f #0a5797 #299bb8
      navy: "#00103C",
      midnight: "#0a3990",
      night: "#2073D1",
      sky: "#4fa1eb",
      ice: {
        100: "#a0d8f4",
        200: "#299bb8",
        300: "#0a5797",
        400: "#00112f",
      },
      black: "#0a0a0a",
      white: "#ffffff",
    },
  },
  plugins: [],
};
