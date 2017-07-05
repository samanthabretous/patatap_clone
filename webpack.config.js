const webpack = require('webpack');
const path = require('path');

const config = {
  entry: ['./js/index.js'],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loaders: ['babel-loader'],
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
