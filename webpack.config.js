const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;


var config = {
    devtool: 'cheap-module-source-map',
    entry: {
        main: ['./src/main'],
        vendor: './src/vendor'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./target'),
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new ExtractTextPlugin('style.css', {allChunks: true}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.template.html'),
            filename: 'index.html',
            hash: true,
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.scss$/, loader: 'style!css!postcss!sass'}
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        modulesDirectories: ['node_modules'],
        root: path.resolve('.')
    },
    postcss: [
        autoprefixer({browsers: ['last 3 versions']})
    ],
    sassLoader: {
       outputStyle: 'compressed',
        precision: 10,
        sourceComments: false
    }
};

config.entry.main.unshift(`webpack-dev-server/client?http://${HOST}:${PORT}`);

config.devServer = {
    contentBase: './src',
    historyApiFallback: true,
    host: HOST,
    port: PORT,
    publicPath: config.output.publicPath,
    stats: {
        cached: true,
        cachedAssets: true,
        chunks: true,
        chunkModules: false,
        colors: true,
        hash: false,
        reasons: true,
        timings: true,
        version: false
    }
};

module.exports = config;




