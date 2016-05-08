var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  module: {
    loaders: [
      {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
      exclude: '/node_modules'
      },

    ]
  },

};
