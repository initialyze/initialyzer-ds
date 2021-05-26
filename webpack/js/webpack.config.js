const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'card': './src/web-component/card/card.js',
    'title': './src/web-component/title/title.js',
  },
  module: {
    rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnError: true,
                            failOnWarning: false,
                            fix: true,
                        },
                    },
                    {
                        loader: 'webpack-import-glob-loader',
                        options: {
                            url: false,
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            }
        ]
    },
  output: {
    filename: () => {
        return '[name].js';
    }
  }
};