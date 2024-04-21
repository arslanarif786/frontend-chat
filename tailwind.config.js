/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  prefix: 't-',
  theme: {
    extend: {
      colors: {
        fgPrimary: '#1B1F29',
        grayBorder: '#DFE2E8',
        primaryGray: '#5F6269',
        lightGray: '#F0F2F6',
        vLightGray: '#667085',
        searchGray: '#B5B8BE',
        brightOrange: '#F36531',
        lightOrange: '#FEF0EA',
        starColor: '#FFA32D',
        primaryParrot: '#58B859',
        primaryBlue: '#0061F9',
        lightBlue: '#CEE1FD'
      }
    },
  },
  plugins: [],
}

