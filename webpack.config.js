const webpack       = require('webpack')
    , path          = require('path')
    , PRODUCTION    = process.env.NODE_ENV === 'production'

const mutualConfig = {
  entry: {
    bundle: './src/client.js'
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
    new webpack.DefinePlugin({"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)})
  ]
}

const config = PRODUCTION
  /* Production Config */
  ? Object.assign(
      {},
      mutualConfig,
      {
        plugins: [
          ...mutualConfig.plugins,
          new webpack.optimize.UglifyJsPlugin({compress:{warnings: false},sourceMap:true}),
        ]
      }
    )
  /* Development Config*/
  : Object.assign(
      {},
      mutualConfig,
      {
        plugins: [
          ...mutualConfig.plugins,
        ],
        devtool: 'inline-source-map'
      }
    )

module.exports = config
