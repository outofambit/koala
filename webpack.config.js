var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, './build/client/'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
