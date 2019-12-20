const path = require('path')

module.exports = {
  components: 'lib/components/*.jsx',
  webpackConfig: require('./webpack.config.js'),
  require: [
    'babel-polyfill',
    path.join(__dirname, 'examples/basic/app.scss'),
  ]
};
