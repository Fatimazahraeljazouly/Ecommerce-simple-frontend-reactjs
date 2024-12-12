/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A4947',
        secondary: '#B17457',
        thi: '#D8D2C2',
        light:'#FAF7F0'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        averia: ['Averia Serif Libre', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // Use `DEFAULT` instead of `default`
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
