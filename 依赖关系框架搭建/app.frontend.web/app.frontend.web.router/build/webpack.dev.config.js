const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: "umd",
    filename: "index.js"
  },
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config')
    })
  ],
  watchOptions: {
    poll: false,
    ignored: [
      /node_modules([\\]+|\/)+(?!\@gfloan)/, 
      /\@gfloan([\\]+|\/).*node_modules/
    ]
  }
};