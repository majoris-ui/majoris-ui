import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  logLevel: 'debug',
};

export default config;
