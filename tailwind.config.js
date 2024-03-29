const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  variants: {
    extend: {
      backgroundOpacity: ['active'],
    }
  },
  theme: {
    extend: {
      colors: {
        base: 'var(--base)',
        accent: 'var(--accent)',
        highlight: 'var(--highlight)',
        danger: 'var(--danger)',
        warning: 'var(--warning)',
        info: 'var(--info)',
        success: 'var(--success)',
        light: 'var(--light)',
        dark: 'var(--dark)',
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
        '2xl': 'var(--font-size-2xl)',
        'icon-sm': 'var(--icon-size-sm)',
        'icon-md': 'var(--icon-size-md)',
        'icon-lg': 'var(--icon-size-lg)',
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
