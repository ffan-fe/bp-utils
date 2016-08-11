var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'examples/app.js'),
  output: {
    filename: '[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname)
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.css$/, loader: 'style!css'},
      // IMAGE
      {
        test: /.(gif|jpg|png)$/,
        loader: 'url-loader'
      },
      // FONT
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require', 'angular']
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'DEBUG': true
      }
    })
  ]
};
