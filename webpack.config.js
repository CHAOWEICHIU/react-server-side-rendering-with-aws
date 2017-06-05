const webpack               = require('webpack')
    , path                  = require('path')
    , WebpackCleanupPlugin  = require('webpack-cleanup-plugin')
    , PRODUCTION    = process.env.NODE_ENV === 'production'


const mutualConfig = {
  entry: {
    bundle: './src/client.js',
    vendor: [ 'superagent', 'react', 'react-dom', 'react-redux', 'redux', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].[chunkhash].js'
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
          new webpack.optimize.CommonsChunkPlugin({name:'vendor'})
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
          new WebpackCleanupPlugin()
        ],
        devtool: 'inline-source-map'
      }
    )

module.exports = config
