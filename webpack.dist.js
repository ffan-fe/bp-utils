/**
 * Created by fjywan on 16/8/16.
 *
 * Webpack config for builds
 */

'use strict';

let webpack = require('webpack');
let config = require('./webpack.make')({
  BUILD: true,
  TEST: false,
  SRC: true
});
config.entry = './src/index';
config.output.path =  './dist';
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'DEBUG': false
  }
}));

module.exports = config;
