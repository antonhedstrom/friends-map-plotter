const path = require('path');

const PUBLIC_ROOT = 'www-public';

module.exports = {
  entry: './www-src/app.jsx',
  output: {
    path: path.resolve(__dirname, PUBLIC_ROOT, 'js'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,  // Match both .js and .jsx
      exclude: /node_modules/,
      include: [
        path.resolve(__dirname, 'www-src'),
      ],
      loader: 'babel-loader'
    }]
  }
};
