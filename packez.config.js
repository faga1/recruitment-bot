"use strict";
const pkg = require("./package.json");
const path = require("path");
const webpack = require("webpack");

module.exports = function(options, state) {
	let buildTime = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
	buildTime = '"' + buildTime + '"';

	return {
		publicPath: "./",
		useTypeScript: false,
		assest: {
			media: {
				limit: 102400,
			},
		},
		// eslint配置
		eslint: {},
		// babel配置
		babel: {
			plugins: [
				[
					"search-and-replace",
					{
						rules: [
							{
								search: "%VERSION%",
								replace: pkg.version,
							},
						],
					},
				],
				["import", { libraryName: "antd", style: "css" }],
			],
		},
		////////////////////////////////
		////////webpack配置示例/////////
		///////////////////////////////
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
				components: path.resolve(__dirname, "./src/components"),
			},
		},
		plugins: [
			new webpack.DefinePlugin({
				"process.env": {
					buildTime: buildTime,
				},
			}),
		],
		devServer: {
			historyApiFallback: true,
			disableHostCheck:true,
			port:5000,
			proxy: {
				"/api1": {
					target: "https://a1.fanbook.mobi/open",
					secure: true,
					changeOrigin: true,
					pathRewrite: {
						"^/api1": "",
					},
				},
			}
		},
	};
};
