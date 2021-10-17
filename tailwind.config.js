module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        '1440': '1440px',
      },
      spacing: {
        '500': '500px',
        '90': '90%',
      },
      colors: {
        brand: {
          'blue': '#193765',
          'light-blue': '#DEEEFC',
          'text-black': '#3D3D3D',
          'text-gray': '#6B7280',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
