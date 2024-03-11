const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },

  devServer: {
    watchFiles: ['./src/index.html'],
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   port: 3000,
  //   open: true,
  // },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Development',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
    output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
    optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};