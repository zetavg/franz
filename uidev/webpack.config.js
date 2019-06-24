const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: path.resolve('../node_modules/react'),
    },
  },
  mode: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('src', 'app.html'),
    }),
  ],
  devServer: {
    inline: true,
    port: 8008,
  },
};
