var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: './app.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundles.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
}
