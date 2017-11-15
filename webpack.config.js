const path = require('path');

const PUBLIC_ROOT = 'www-public';

module.exports = {
  entry: './www-src/app.js',
  output: {
    path: path.resolve(__dirname, PUBLIC_ROOT, 'js'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
