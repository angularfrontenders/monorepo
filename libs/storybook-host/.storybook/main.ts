import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../../../libs/**/*.mdx',
    '../../../libs/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentación',
  },
  staticDirs: [
    { from: '../src/assets/angular-frontenders-icon.svg', to: 'favicon.svg' },
    { from: '../src/assets', to: '/assets' },
    { from: '../src/fonts', to: '/fonts' },
    { from: '../src/styles/af-typography.css', to: 'af-typography.css' },
  ],
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
