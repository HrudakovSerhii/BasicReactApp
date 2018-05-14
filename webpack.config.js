/**
 * Created by Serhiy on 14.05.18.
 */
const PATH = require('path');
const WEBPACK = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = function (path) {
	return PATH.resolve(__dirname, path);
};

const PATHS = {
	SRC : resolve('src'),
	JS  : resolve('src/js'),
	CSS : resolve('src/css'),
	PUBLIC: resolve('public'),
	ASSETS: resolve('public/assets')
};

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		path    : PATHS.PUBLIC,
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		contentBase: PATHS.PUBLIC,
		hot        : true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new WEBPACK.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['babel-preset-env']
					}
				}
			}
			// {
			// 	test: /\.scss$/,
			// 	loaders: ["style-loader","css-loader","sass-loader"]
			// },
			// {
			// 	test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
			// 	loader: 'file-loader'
			// },
			// {
			// 	test: /\.(png|jpg|gif|svg)$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {}
			// 		}
			// 	]
			// }
		]
	}
};
