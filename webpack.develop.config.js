const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// let env = process.env.NODE_ENV=="development"?"development":"production";
const srcRoot = path.resolve(__dirname, 'src');
const devPath = path.resolve(__dirname, 'dev');

const config = {
  mode:"development",
  devServer:{
    contentBase: devPath,
    // open:true
  },
  context: path.resolve('./src'),
  entry: {
    'timeline':path.resolve('./src/page/timeline/timeline.js'),
    'table':path.resolve('./src/page/table/table.js')
  },
  resolve:{
    extensions: ['.js']  // 省略扩展名
  },
  output: {
    path: devPath,
    filename: '[name].min.js'
  },
  module: {
    rules:[
      { test: /\.(js|jsx)$/, use:[{loader: 'babel-loader'},{loader: 'eslint-loader'}], include: srcRoot},
      { test: /\.css$/, use: ['style-loader','css-loader'], include: srcRoot },
      { test: /\.scss$/, use: ['style-loader','css-loader', 'sass-loader'], include: srcRoot },
      { test: /\.(png|jpg|jpeg)$/, use: 'url-loader?limit=8192', include: srcRoot },
      { test: /\.ejs$/, loader: 'ejs-loader?variable=data' },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"timeline",
      filename: 'timeline.html',
      template: './template.ejs',
      chunks: ['timeline']
    }),
    new HtmlWebpackPlugin({
      title:"table",
      filename: 'table.html',
      template: './template.ejs',
      chunks: ['table']
    }),
  ]
}

module.exports = config;