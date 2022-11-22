const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    test001: './app/example/test001.ts',
    tree: './app/example/tree.ts',
    hierarchy: './app/example/hierarchy.ts',
    test: './app/example/test.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'd3-test',  // 类库名称
    libraryTarget: 'umd'  // 类库打包方式
  },
  resolve: {
    modules: [path.resolve('node_modules')],
    alias: {
      '~': path.resolve(__dirname, './app')
    },
    extensions: ['.js', '.jsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.(jpg|png|gif|jpeg|bmp|eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20 * 1024,
            outputPath: './',
          }
        }
      }
    ]
  },
  watch: true,
  watchOptions: {
      poll: 2000, //每秒问我多少次
      aggregateTimeout: 1000, //防抖
      ignored: /node_modules|vendor|build|public|resources/
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      chunks: ['test'],
      filename: './example/test.html'
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      chunks: ['test001'],
      filename: './example/test001.html'
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      chunks: ['tree'],
      filename: './example/tree.html'
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      chunks: ['hierarchy'],
      filename: './example/hierarchy.html'
    })
  ],
  devServer: {
    port: 8080,
    progress: true,
    contentBase: './build',
    open: true,
    //hot: true,
    proxy: {
      '/mui/src/css': {
        target: 'http://project.xuehtml.com',
        changeOrigin: true
      }
    },
  }
}
