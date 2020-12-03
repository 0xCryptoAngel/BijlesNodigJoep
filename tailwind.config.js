// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    variants: {
      extend: {
        fontWeight: ['hover', 'focus'],
      },
    },
    extend: {
      minHeight: {
        80: '80px',
        140: '140px',
      },
      flexShrink: {
        2: 2,
      },
      colors: {
        'light-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
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
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-dark-mode')(),
  ],
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
