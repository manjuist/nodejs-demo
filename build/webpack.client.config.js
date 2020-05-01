const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const ROOTDIR = path.resolve(__dirname, '..');
const APPDIR = path.resolve(ROOTDIR, './react');
const DISTDIR = path.resolve(ROOTDIR, './dist');

const mode = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  mode,
  target: 'node',
  entry: {
    app: './react',
    home: './react/home.js'
  },
  output: {
    path: DISTDIR,
    filename: '[name].[hash].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}
