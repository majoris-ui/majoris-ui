import type { StorybookConfig } from '@storybook/angular';
import path from 'path';

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
  webpackFinal: async (config, { configType }) => {
    config.module?.rules?.push({
      test: /\.scss$/,
      use: ['sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  logLevel: 'debug',
};

export default config;
