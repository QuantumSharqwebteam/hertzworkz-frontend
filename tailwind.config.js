/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F5',
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
        ink: '#0B0B0E',
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
        manrope: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #FF8A3D 0%, #F0503A 100%)',
        'brand-gradient-hover': 'linear-gradient(90deg, #D9502F 0%, #B83A26 100%)',
        'hero-sphere': 'radial-gradient(circle at 25% 20%, #FFA27A 0%, #F2641E 22%, #E4651A 45%, #C8452E 80%, #B63A2E 100%)',
        'approach-sphere': 'radial-gradient(circle at 30% 25%, #3B3B3E 0%, #232325 45%, #141416 100%)',
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
      keyframes: {
        'sphere-pulse': {
          '0%, 100%': { filter: 'brightness(1)', boxShadow: '0 0 80px 10px rgba(255,120,50,0.45)' },
          '50%': { filter: 'brightness(0.88)', boxShadow: '0 0 60px 6px rgba(255,120,50,0.3)' },
        },
        // Drops in from above the viewport, then swings on the cord like a
        // pendulum before settling - transform-origin must be top center.
        'phone-drop': {
          '0%': { transform: 'translateY(-120%) rotate(0deg)', opacity: '0' },
          '45%': { transform: 'translateY(0%) rotate(9deg)', opacity: '1' },
          '60%': { transform: 'translateY(0%) rotate(-6deg)' },
          '75%': { transform: 'translateY(0%) rotate(3.5deg)' },
          '88%': { transform: 'translateY(0%) rotate(-1.5deg)' },
          '100%': { transform: 'translateY(0%) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        'sphere-pulse': 'sphere-pulse 10s ease-in-out infinite',
        'phone-drop': 'phone-drop 2.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
