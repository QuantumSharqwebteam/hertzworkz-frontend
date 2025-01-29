/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#E6E6E6',
        cust: '#262626',
        cust1:'#1A1A1A',
        application:'#1A1A1A', 
        lightOrange: '#FE5D26',
        grayCustom: '#98989A',
        bigText:'#FE5D264D',
        lightGray2:'#999999',
        lightGray3:'#86868B',
        footer:'#E4E4E7',
        footerLight:'#677489',
      },
      borderRadius: {
        'custom-lg': '0.74px',
      },
      spacing: {
        18: '4.5rem', 
      },
      fontFamily: {
        segoe: ['"Segoe UI"', 'sans-serif'], 
        urbanist: ['Urbanist', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'], 
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle,rgb(245, 110, 0),rgb(27, 14, 1),rgb(12, 8, 3))',
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'radial-at-t': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'radial-at-b': 'radial-gradient(circle at bottom, var(--tw-gradient-stops))',
        'radial-at-l': 'radial-gradient(circle at left, var(--tw-gradient-stops))',
        'radial-at-r': 'radial-gradient(circle at right, var(--tw-gradient-stops))',
        'grid': 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.1) 21px), repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(255, 255, 255, 0.1) 21px)',
      },
      fontSize: {
        'custom-base': '28px',
        'custom-md': '32px',
        'custom-lg': '36.67px',
      },
      fontWeight: {
        'semi-bold': 600,
      },
      lineHeight: {
        'custom-base': '40px',
        'custom-md': '50px',
        'custom-lg': '55px',
      },
      fontSize: {
        '11.25': '11.25px', 
      },
      borderWidth: {
        1: '1px',
    },
    },
  },
  plugins: [],
};
