/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        getirpurple: 'rgb(76, 51, 152)',
        getirpurplelight:'#5d3ebc',
        getiryellow: '#ffd300',
        getirgray: '#FAFAFA',
        getirtextgray: '#697488',
      },
      screens:{
        maxmd:{
          'max':'767px'
        }
      }
    },
  },
  plugins: [],
}
