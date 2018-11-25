/**
 * @file config dev
 * @author xiaozhihua
 * @date 2018-11-25 13:07:43
 */

const merge = require('webpack-merge')
const common = require('./webpack.config.common')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')('last 100 versions')
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [ 
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')('last 100 versions')
              ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'eval-source-map'
})