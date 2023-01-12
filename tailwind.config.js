/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',
    // './pages/components/**/*.{js,ts,jsx,tsx}',
  //   './pages/tabs/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#616161',
      },
      keyframes: {
        growWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        growHeight: {
          '0%': { height: '0%' },
          '100%': { height: '100%' }
        },
        visibilityGrowing: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
      },
      animation: {
        'widthGrowing': 'growWidth 1s ease',
        'heightGrowing': 'growHeight 1s ease',
        'visibilityGrowing': 'visibilityGrowing 2s ease'
      },
    },
  },
  plugins: [],
}
