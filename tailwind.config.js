/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {screens:{
    sm:'480px',
    md:'768px',
    lg:'976px',
    lg:'1440px'
  },
    extend: {
      fontFamily:{
        sans: ['Poppins', 'sans-serif']
      },
      colors:{
        primary: '#466d50'
      }
    },
  },
  plugins: [],
}
