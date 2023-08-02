/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Montserrat'],
        'second': ['Work Sans']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '7': 'repeat(7, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))'

       
      }
    },
  },
  plugins: [],
}
