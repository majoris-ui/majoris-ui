const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'default': {
          DEFAULT: 'var(--default)',
          active: 'var(--default-active)',
          hover: 'var(--default-hover)',
        },
        'alternative': {
          DEFAULT: 'var(--alternative)',
          active: 'var(--alternative-active)',
          hover: 'var(--alternative-hover)',
        },
        'highlight': {
          DEFAULT: 'var(--highlight)',
          active: 'var(--highlight-active)',
          hover: 'var(--highlight-hover)',
        },
        'success': {
          DEFAULT: 'var(--success)',
          active: 'var(--success-active)',
          hover: 'var(--success-hover)',
        },
        'warning': {
          DEFAULT: 'var(--warning)',
          active: 'var(--warning-active)',
          hover: 'var(--warning-hover)',
        },
        'danger': {
          DEFAULT: 'var(--danger)',
          active: 'var(--danger-active)',
          hover: 'var(--danger-hover)',
        },
        'info': {
          DEFAULT: 'var(--info)',
          active: 'var(--info-active)',
          hover: 'var(--info-hover)',
        },
        'dark': {
          DEFAULT: 'var(--dark)',
          active: 'var(--dark-active)',
          hover: 'var(--dark-hover)',
        },
        'light': {
          DEFAULT: 'var(--light)',
          active: 'var(--light-active)',
          hover: 'var(--light-hover)',
        },
        'gray': {
          DEFAULT: 'var(--gray)',
          active: 'var(--gray-active)',
          hover: 'var(--gray-hover)',
        }
      },
      borderRadius: {
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
        full: 'var(--border-radius-full)',
        none: 'var(--border-radius-none)',
      },
      height: {
        sm: 'var(--height-sm)',
        md: 'var(--height-md)',
        lg: 'var(--height-lg)',
      },
      spacing: {
        sm: 'var(--padding-sm)',
        md: 'var(--padding-md)',
        lg: 'var(--padding-lg)',
      },
      fontSize: {
        sm: 'var(--font-size-sm)',
        md: 'var(--font-size-md)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)'
      },
      boxShadow: {
        sm: 'var(--box-shadow-sm)',
        md: 'var(--box-shadow-md)',
        lg: 'var(--box-shadow-lg)',
      }
    },
  },
  plugins: [],
};
