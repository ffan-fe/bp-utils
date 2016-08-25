/**
 * Created by fjywan on 16/8/16.
 *
 * Webpack config for generate examples
 */

'use strict';

let webpack = require('webpack');
let config = require('./webpack.make')({
  BUILD: true,
  TEST: false
});
config.entry = './examples/app.js';
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'DEBUG': true
  }
}));

module.exports = config;
