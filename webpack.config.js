const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/app/index'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Angular Test Task',
            template: 'src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, include: APP_DIR },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
            { test: /\.html$/, loader: 'raw' },
            { test: /\.jade$/, loader: 'jade-loader' },
            // inline base64 URLs for <=8k images, direct URLs for the rest
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            // helps to load bootstrap's css.
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff' },
            { test: /\.woff2$/,
                loader: 'url?limit=10000&minetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml' }
        ]
    }
};

module.exports = config;