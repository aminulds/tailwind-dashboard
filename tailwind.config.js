/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],

  theme: {
    extend: {
      colors: {

        // social color
        youtube: '#FF0000',
        facebook: '#4267B2',
        pinterest: '#E60023',
        twitter: '#1DA1F2',
      }
    },
  },
  plugins: [],
}