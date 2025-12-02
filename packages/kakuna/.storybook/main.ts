import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(ts|mdx)',
    '../../colors/src/**/*.stories.@(ts|mdx)',
    '../../snow/src/**/*.stories.@(ts|mdx)',
  ],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/angular',
    options: {}
  },

  core: {
    builder: '@storybook/builder-vite'
  },

  docs: {
    autodocs: true
  }
};

export default config;
