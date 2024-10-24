/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'selector',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      colors: {
        black: '#1a1e28',
        'dark-typo': '#94a3b8',
        'blue-prime': '#5cc6fe',
        'blue-prime-light': '#6cccff',
        'blue-prime-ultra': '#e0f4ff',
        'blue-prime-ultra-typo': '#259ad8',
        'blue-prime-ultra-dim': '#b4d8ec',
        'white-subtle': '#fcfcfb',
        'blue-subtle': '#273045',
        'blue-subtle-2': '#364362',
      },
      spacing: {
        '1': '0.25rem',
        '9': '2.75rem',
        '10': '3rem',
      },
      fontSize: {
        xsm: '13px'
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}
