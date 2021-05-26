const path = require('path');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'card': './src/web-component/card/card.scss',
  },
  module: {
    rules: [
            {
                test: /\.scss$/,
                use: [
                    'raw-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
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
        ]
    },

  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
  ]
};