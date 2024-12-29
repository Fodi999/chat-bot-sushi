/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      screens: {
        'xs': '430px', // Для экранов шириной 430px
        'sm': '640px', // Стандартный sm (разрешение по умолчанию для маленьких экранов)
        'md': '768px', // Для экранов шириной 768px (например, планшеты)
        'lg': '1024px', // Для экранов шириной 1024px (например, ноутбуки)
        'xl': '1280px', // Для экранов шириной 1280px (большие экраны)
        '2xl': '1536px', // Для экранов шириной 1536px и выше
      },
    },
  },
  plugins: [],
};


