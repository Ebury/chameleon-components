/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    sideEffects: true,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });
  config.module.rules.push({
    sideEffects: true,
    test: /\.sass$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '..', 'src'),
  };
  config.module.rules.push({
    test: /\.story\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  return config;
};
