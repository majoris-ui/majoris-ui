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
        main: 'var(--main-text)',
        dark: 'var(--dark-text)',
        danger: 'var(--danger-text)',
        success: 'var(--success-text)',
        warning: 'var(--warning-text)',
        info: 'var(--info-text)',
      },
      colors: {
        main: {
          base: 'var(--main-base)',
          accent: 'var(--main-accent)',
          highlight: 'var(--main-highlight)',
        },
        dark: {
          base: 'var(--dark-base)',
          accent: 'var(--dark-accent)',
          highlight: 'var(--dark-highlight)',
        },
        danger: {
          base: 'var(--danger-base)',
          accent: 'var(--danger-accent)',
          highlight: 'var(--danger-highlight)',
        },
        success: {
          base: 'var(--success-base)',
          accent: 'var(--success-accent)',
          highlight: 'var(--success-highlight)',
        },
        warning: {
          base: 'var(--warning-base)',
          accent: 'var(--warning-accent)',
          highlight: 'var(--warning-highlight)',
        },
        info: {
          base: 'var(--info-base)',
          accent: 'var(--info-accent)',
          highlight: 'var(--info-highlight)',
        },
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
        main: 'var(--main-box-shadow)',
        dark: 'var(--dark-box-shadow)',
        danger: 'var(--danger-box-shadow)',
        success: 'var(--success-box-shadow)',
        warning: 'var(--warning-box-shadow)',
        info: 'var(--info-box-shadow)',
      }
    },
  },
  plugins: [],
};
