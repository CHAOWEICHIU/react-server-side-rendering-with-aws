const webpack = require('webpack')
    , path = require('path')


module.exports = {
  entry: {
    bundle: './src/client.js'
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].js'
  },
  devServer: {
    compress: true,
    port:8888,
    stats: {colors:true}
  },
  devtool: 'inline-source-map',
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
    // new webpack.optimize.UglifyJsPlugin({compress:{warnings: false},sourceMap:true}),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name:'vendor'
    // })
  ]
}
