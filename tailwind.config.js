/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary': '#1e1e1e',
      'secondary': '#C3C3C3',
      'accent': '#FFD700',
      'third': '#e8e8e8',
      'fourth': '#7e7e7e',
      'white': '#ffffff',
      'progress': '#1FD655',  
    },
    extend: {}
  },
  plugins: []
}
