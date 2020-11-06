// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      variants: {
        backgroundColor: [
          'dark',
          'dark-hover',
          'dark-group-hover',
          'dark-even',
          'dark-odd',
        ],
        borderColor: [
          'dark',
          'dark-disabled',
          'dark-focus',
          'dark-focus-within',
        ],
        textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
      },
    },
    darkSelector: '.dark-mode',
  },
  plugins: [require('@tailwindcss/ui'), require('tailwindcss-dark-mode')()],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
}
