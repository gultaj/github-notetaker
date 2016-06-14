module.exports = {
	entry: './app/App.js',
	output: {
		filename: 'public/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', "stage-0", 'react'],
					plugins: ['transform-decorators-legacy']
				}
			}
		]
	}
};