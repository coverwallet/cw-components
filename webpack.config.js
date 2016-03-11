var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var EXAMPLES_DIR = __dirname + '/examples';

function buildEntries() {
  return fs.readdirSync(EXAMPLES_DIR).reduce(function (entries, dir) {
    if (dir === 'build') {
      return entries;
    }

    var isDraft = dir === 'build';
    var isDirectory = fs.lstatSync(path.join(EXAMPLES_DIR, dir)).isDirectory();

    if (!isDraft && isDirectory) {
      entries[dir] = path.join(EXAMPLES_DIR, dir, 'app.js');
    }

    return entries;
  }, {});
}

module.exports = {
  entry: buildEntries(),
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: 'examples/__build__',
    publicPath: '/__build__/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.jsx$/,
      loaders: ['babel-loader']
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!sass-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
      exclude: /node_modules/
    }, {
      test: /\.woff/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf/,
      loader: 'file'
    }, {
      test: /\.eot/,
      loader: 'file'
    }, {
      test: /\.svg/,
      loader: 'file'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  }
}