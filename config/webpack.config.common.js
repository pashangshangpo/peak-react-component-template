/**
 * @file config common
 * @author xiaozhihua
 * @date 2018-11-25 13:08:26
 */

const path = require('path')

const resolve = pathName => {
  return path.resolve('.', pathName)
}

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    path: resolve('build'),
    filename: '[name].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', 'svg'],
    alias: {
      '$components': resolve('components'),
      '$common': resolve('common'),
      '$svg': resolve('svg')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)/,
        include: [
          resolve('components')
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'image/[name].[hash].[ext]',
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.svg/,
        include: [
          resolve('svg'),
          resolve('components')
        ],
        use: ['svg-sprite-loader']
      }
    ]
  },
  plugins: [
  ]
}
