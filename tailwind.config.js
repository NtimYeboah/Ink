/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    'index.html',
    'page-details.html',
    'about.html',
    'projects.html',
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        'saira': ['"Saira Condensed"', ...defaultTheme.fontFamily.serif],
        'sarabun': ['Sarabun', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

