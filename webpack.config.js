const path = require('path')

module.exports = {
  entry: './playground/index.js',
  devServer: {
    contentBase: './playground',
    historyApiFallback: {
      index: 'index.html'
    },
    port: 3000
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    alias: {
      'react-bootstrap-widgets': path.resolve(__dirname, 'src'),
    }
  }
};
