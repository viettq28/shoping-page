/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg)', opacity: 0 },
          '10%': { transform: 'translateX(-50%) translateY(-50%) rotate(-15deg)', opacity: 0.1 },
          '70%': { transform: 'translateX(-50%) translateY(-50%) rotate(10deg)', opacity: 0.7 },
          '90%': { transform: 'translateX(-50%) translateY(-50%) rotate(-3deg)', opacity: 0.9 },
          '100%': { transform: 'translateX(-50%) translateY(-50%) rotate(0)', opacity: 1 },
        },
      },
      animation: {
        'shaking-popup': 'shake 0.5s',
      },
    },
  },
  plugins: [],
};
