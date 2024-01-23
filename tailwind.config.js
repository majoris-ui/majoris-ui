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
        'primary': '#23F0C7',
        'accent': '#564787',
        'highlight': '#6320EE',
        'success': '#9BC53D',
        'warning': '#FFE347',
        'danger': '#C3423F',
        'info': '#5BC0EB',
        'dark': '#000',
        'light': '#fff',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        full: '9999px',
        none: '0',
      }
    },
  },
  plugins: [],
};
