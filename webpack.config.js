const webpack               = require('webpack')
    , path                  = require('path')
    , WebpackCleanupPlugin  = require('webpack-cleanup-plugin')
    , ExtractTextPlugin     = require('extract-text-webpack-plugin')
    , PRODUCTION            = process.env.NODE_ENV === 'production'


const mutualConfig = {
  entry: {
    bundle: './src/client.js',
    vendor: [
      'superagent',
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'react-router-dom',
      'moment',
      'lodash'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        use: ExtractTextPlugin.extract({use:'css-loader'})
      },
    ]
  },
  plugins:[
    new webpack.DefinePlugin({"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)}),
    new webpack.optimize.CommonsChunkPlugin(
      {name:'vendor', filename:'js/[name].[chunkhash].js', minChunks: Infinity}
    ),
    new ExtractTextPlugin('css/style.[chunkhash].css'),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /zh-tw/
    )
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
          new WebpackCleanupPlugin()
        ],
        devtool: 'inline-source-map'
      }
    )

module.exports = config
