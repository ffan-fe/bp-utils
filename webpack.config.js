var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'sourcemap',
  entry: {},
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.css$/, loader: 'style!css' },
      // IMAGE
      {
        test: /.(gif|jpg|png)$/,
        loader: 'file?name=img-[hash].[ext]'
      },
      // FONT
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[name].[ext]" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'examples/index.html',
      inject: 'body',
      hash: true
    }),

	  new webpack.ProvidePlugin({
		  $: "jquery",
		  jQuery: "jquery"
	  }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && (module.resource.indexOf(path.resolve(__dirname, 'src')) === -1 || module.resource.indexOf(path.resolve(__dirname, 'examples')) === -1);
      }
    })
  ]
};
