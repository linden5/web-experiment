const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist')
  },
  mode: 'development',
  output: {
    libraryTarget: "umd",
    filename: "index.js"
  }
};