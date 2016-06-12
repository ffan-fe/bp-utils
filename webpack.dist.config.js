var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var distPath = path.resolve(__dirname, 'dist');
if(process.env.APP){
	try{
		distPath = require('./client/app/components/'+ process.env.APP +'/'+process.env.APP+'.dist.path').default;
	}catch(e){
		console.log('警告:无法找到app为'+process.env.APP+'相关dist路径,将使用系统默认路径');
	}
}

config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: distPath
};

config.plugins = config.plugins.concat([

  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  })
]);

module.exports = config;
