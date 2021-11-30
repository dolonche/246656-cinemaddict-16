const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './public/js/'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    hot: false,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 9000,
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      }
    }]
  }
}
