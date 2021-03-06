const path = require('path');

module.exports = {
	entry: './client/src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './client/dist')
	},
	module:{
		rules: [{
			test: /\.m?jsx$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react']
				}
			}
		}]
	}
}