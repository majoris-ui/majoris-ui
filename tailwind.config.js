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
      textColor: {
        'primary': 'var(--primary-text)',
        'accent': 'var(--accent-text)',
        'highlight': 'var(--highlight-text)',
        'success': 'var(--success-text)',
        'warning': 'var(--warning-text)',
        'danger': 'var(--danger-text)',
        'info': 'var(--info-text)',
        'light': 'var(--light-text)',
        'dark': 'var(--dark-text)',
      },
      colors: {
        'primary': {
          DEFAULT: 'var(--primary)',
          active: 'var(--primary-active)',
          hover: 'var(--primary-hover)',
        },
        'accent': {
          DEFAULT: 'var(--accent)',
          active: 'var(--accent-active)',
          hover: 'var(--accent-hover)',
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
      },
      borderRadius: {
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
        full: 'var(--border-radius-full)',
        none: 'var(--border-radius-none)',
      }
    },
  },
  plugins: [],
};
