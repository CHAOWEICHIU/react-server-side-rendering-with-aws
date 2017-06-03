const webpack = require('webpack')
    , path = require('path')


module.exports = {
  entry: {
    bundle: './src/client.js',
    vendor: [ 'react', 'react-dom', 'react-redux', 'redux']
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    })
  ]
}
