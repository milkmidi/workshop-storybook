/* eslint-disable no-param-reassign */
const path = require('path');
const webpack = require('webpack');

const toPath = (_path) => path.join(process.cwd(), _path);
// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  console.log('storybook config mode', mode);
  // 'PRODUCTION' is used when building the static version of storybook.

  const isDevelopment = process.env.NODE_ENV === 'development';
  const alias = {
    // emotion storybook issue
    // https://github.com/storybookjs/storybook/issues/13145
    '@emotion/css': toPath('node_modules/@emotion/css'),
    '@emotion/core': toPath('node_modules/@emotion/react'),
    '@emotion/styled': toPath('node_modules/@emotion/styled'),
    'emotion-theming': toPath('node_modules/@emotion/react'),
  };

  Object.assign(config.resolve.alias, alias);

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        __DEV__: isDevelopment,
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        APP_ENV: JSON.stringify(process.env.APP_ENV),
      },
    }),
  );

  return config;
};
