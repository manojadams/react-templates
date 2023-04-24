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
          loader: "swc-loader",
        }
      },
      {
        test: /\.css$/,
        use:  ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        type: "asset/resource"
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}