/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    'index.html',
    'page-details.html',
    'about.html',
    'projects.html',
    'search.html',
    'index2.html',
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        'saira': ['"Saira Condensed"', ...defaultTheme.fontFamily.serif],
        'sarabun': ['Sarabun', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'baccara': '#140006',
        'daccara': '#0A0003',
        'faccara': '#050002',
      }
    },
  },
  plugins: [],
}

