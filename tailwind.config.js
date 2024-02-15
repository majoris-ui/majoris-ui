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
        default: 'var(--text)',
        alt: 'var(--text-alt)',
      },
      colors: {
        base: 'var(--base)',
        accent: 'var(--accent)',
        highlight: 'var(--highlight)',
        danger: 'var(--danger)',
        warning: 'var(--warning)',
        info: 'var(--info)',
        success: 'var(--success)',
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
        default: 'var(--shadow)',
        danger: 'var(--danger-shadow)',
        warning: 'var(--warning-shadow)',
        info: 'var(--info-shadow)',
        success: 'var(--success-shadow)',
      }
    },
  },
  plugins: [],
};
