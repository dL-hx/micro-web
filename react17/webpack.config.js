/*
 * @Author: Sunny
 * @Date: 2021-11-07 23:25:54
 * @LastEditors: Suuny
 * @LastEditTime: 2022-04-19 17:02:45
 * @Description: 
 * @FilePath: /micro-front-end-teach-asset/react16/webpack.config.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: { path: ['regenerator-runtime/runtime', './index.js'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react16.js',
    library: 'react16',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: 'http://localhost:8083'
  },
  module: {
    rules: [
      {
        test: /\.js(|x)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(cs|scs)s$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },

    ]
  },
  optimization: {
    splitChunks: false,
    minimize: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8083,
    historyApiFallback: true,
    hot: true
  },
  performance: {   //  就是为了加大文件允许体积，提升报错门栏。  
    hints: "warning", // 枚举
    maxAssetSize: 500000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 500000000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }        
  },
}
