const path = require('path');

module.exports = {
  stories: ['../**/*.story.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve.alias || {}),
        'next/config': path.join(__dirname, './mocks/next-config.js'),
      },
    },
  }),
};
