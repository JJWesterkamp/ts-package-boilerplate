const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    mode: "production",
    entry: {
        "package-name": "./src/index.ts",
        "package-name.min": "./src/index.ts",
    },
    output: {
        path: resolve(__dirname, 'umd'),
        filename: '[name].js',
        library: 'PackageName',
        libraryTarget: 'umd',
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.min\.js$/,
                sourceMap: true,
            }),
        ],
    },

    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ["ts-loader"],
                exclude: /node_modules/,
            }
        ],
    }
};
