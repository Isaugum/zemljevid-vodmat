/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange': '#ffd438',
        'orange-second': '#fcc80a'
      }
    },
  },
  plugins: [],
}

