/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
      'xsm': {min:'0px', max: '576px'},
      'sm' : '576px',
      'md' : '768px',
      'lg' : '992px',
      'xl' : '1200px',
      '2xl' : '1400px',
      'xxl' : '1700px',
    },
  },
    
  },
  plugins: [],
}
