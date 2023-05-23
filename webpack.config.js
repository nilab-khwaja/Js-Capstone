const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },

  devServer: {
    static: './dist',
    watchFiles: ['./src/*'],
    open: true,
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './src/index.html',
      },
    ),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name]-[hash][ext]',
        },
      },
    ],
  },
};