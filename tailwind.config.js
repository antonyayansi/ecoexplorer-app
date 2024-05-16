/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      textColor:{
        skin: {
          primary: 'rgb(var(--color-primary-500))',
          secondary: 'rgb(var(--color-secondary))',
          success: 'rgb(var(--color-success))',
          info: 'rgb(var(--color-info))',
          danger: 'rgb(var(--color-danger))',
          warning: 'rgb(var(--color-warning))'
        },
      },
      backgroundColor:{
        skin: {
          primary: 'rgb(var(--color-primary-500))',
          primary_hover: 'rgb(var(--color-primary-600))',
          secondary: 'rgb(var(--color-secondary))',
          success: 'rgb(var(--color-success))',
          info: 'rgb(var(--color-info))',
          danger: 'rgb(var(--color-danger))',
          warning: 'rgb(var(--color-warning))'
        }
      },
      borderColor: {
        skin: {
          primary: 'rgb(var(--color-primary-500))',
          secondary: 'rgb(var(--color-secondary))',
          success: 'rgb(var(--color-success))',
          info: 'rgb(var(--color-info))',
          danger: 'rgb(var(--color-danger))',
          warning: 'rgb(var(--color-warning))'
        }
      },
      ringColor: {
        skin: {
          primary: 'rgb(var(--color-primary-500))',
          secondary: 'rgb(var(--color-secondary))',
          success: 'rgb(var(--color-success))',
          info: 'rgb(var(--color-info))',
          danger: 'rgb(var(--color-danger))',
          warning: 'rgb(var(--color-warning))'
        }
      },
      gradientColorStops: {
        skin: {
          primary: 'rgb(var(--color-primary))',
          secondary: 'rgb(var(--color-secondary))',
          success: 'rgb(var(--color-success))',
          info: 'rgb(var(--color-info))',
          danger: 'rgb(var(--color-danger))',
          warning: 'rgb(var(--color-warning))'
        }
      },
      colors: {
        'primary-50': 'rgb(var(--color-primary-50))',
        'primary-100': 'rgb(var(--color-primary-100))',
        'primary-200': 'rgb(var(--color-primary-200))',
        'primary-300': 'rgb(var(--color-primary-300))',
        'primary-400': 'rgb(var(--color-primary-400))',
        'primary-500': 'rgb(var(--color-primary-500))',
        'primary-600': 'rgb(var(--color-primary-600))',
        'primary-700': 'rgb(var(--color-primary-700))',
        'primary-800': 'rgb(var(--color-primary-800))',
        'primary-900': 'rgb(var(--color-primary-900))',
        'primary-950': 'rgb(var(--color-primary-950))',
        'surface-0': 'rgb(var(--surface-0))',
        'surface-50': 'rgb(var(--surface-50))',
        'surface-100': 'rgb(var(--surface-100))',
        'surface-200': 'rgb(var(--surface-200))',
        'surface-300': 'rgb(var(--surface-300))',
        'surface-400': 'rgb(var(--surface-400))',
        'surface-500': 'rgb(var(--surface-500))',
        'surface-600': 'rgb(var(--surface-600))',
        'surface-700': 'rgb(var(--surface-700))',
        'surface-800': 'rgb(var(--surface-800))',
        'surface-900': 'rgb(var(--surface-900))',
        'surface-950': 'rgb(var(--surface-950))'
    }
    },
  },
  plugins: [],
}

