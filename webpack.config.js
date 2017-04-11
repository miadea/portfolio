var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'docs/public/');
var APP_DIR = path.resolve(__dirname, 'app/');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
   loaders : [
     {
       test : /\.jsx?/,
       include : APP_DIR,
       loader : 'babel-loader'
     },
     {
       test : /\.less/,
       include : APP_DIR,
       loader : 'style-loader!css-loader!less-loader'
     }
   ]
  }
};

module.exports = config;
