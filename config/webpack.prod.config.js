var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var entre = {};
require("babel-core").transform("code", {
	plugins: ["transform-class-properties"]
});
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'eval',
	entry: { index: ['./src/index.js'] },
	output: {
		path: path.resolve(__dirname, '../dist/'),
		// publicPath: './static/',
		filename: "./static/js/[name]-[hash].js"
	},
	module: {
		rules: [{
			test: /\.css$/,
			// loader: ['style-loader', 'css-loader']
			loader: "style-loader!css-loader?modules&localIdentName=[hash:base64:16]"	//css模块化，定制类名
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
		// new webpack.HotModuleReplacementPlugin(),
		// new webpack.NoEmitOnErrorsPlugin(),
		// https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '../build/index.tpl.html'),
			inject: true
		}),
	],
	resolve: {
		extensions: ['.vue', '.js', '.jsx', '.json', ' '],
	}
}






