/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'snelder-blue': '#1F4E79',
        'snelder-orange': '#FF7F32',
        'snelder-gray': '#F4F4F4',
        'snelder-text': '#1F1F1F',
      },
    },
  },
  plugins: [],
};
