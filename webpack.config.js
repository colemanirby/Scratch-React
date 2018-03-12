/*
    ./webpack.config.js
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './src');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
});

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!! APP_DIR: " + APP_DIR);
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!! BUILD_DIR: " + BUILD_DIR);
module.exports = {
    entry: [
        'babel-polyfill',
        APP_DIR+ '/index.js',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        publicPath : '/',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    devServer: {
        port:8080,
        serverSideRender:true,
        contentBase : '/' ,
        quiet: false,
        stats: { colors: true },
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [HtmlWebpackPluginConfig]
};