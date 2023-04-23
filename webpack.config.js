const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader"
        }
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}