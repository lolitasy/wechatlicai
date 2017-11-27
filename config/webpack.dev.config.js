var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var entre = {};
require("babel-core").transform("code", {
	plugins: ["transform-class-properties"]
});

module.exports = {
	devtool: 'eval',
	entry: { index: ['./src/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true'] },
	output: {
		path: __dirname + "/dist",
		publicPath: '/dist/',
		filename: "[name].js"
	},
	module: {
		rules: [{
			test: /\.css$/,
			// loader: ['style-loader', 'css-loader']
			loader: "style-loader!css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]"	//css模块化，定制类名
		},
		{
			test: /\.less$/,
			// loader: ['style-loader', 'css-loader', 'less-loader']
			use: [
				{
					loader: "style-loader"
				}, {
					loader: "css-loader",
					options: {
						modules: false	//暂未找到支持less的模块化方法
					}
				}, {
					loader: "less-loader"
				}
			]
		},
		{
			test: /\.vue$/,
			loader: "vue-loader"
		},
		{
			test: /\.js$|\.jsx$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react', 'stage-0']
			}
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	resolve: {
		extensions: ['.vue', '.js', '.jsx', '.json', ' '],
	}
}






