var webpack = require('webpack');
var path=require('path');

module.exports = {
	entry: ['./index.js'],
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: __dirname
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015', 'stage-0']
			}
		},
		{
			test:/\.scss$/,
			exclude:/node_modules/,
			loaders:["style", "css", "sass"]
		},
		{
			test:/\.css$/,
			exclude:/node_modules/,
			loaders:["style", "css"]
		},
		{
			test:/\.less$/,
			exclude:/node_modules/,
			loaders:["style", "css","less"]
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}