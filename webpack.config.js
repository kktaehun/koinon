var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/app.js',
        './public/style.css',
    ]

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                  presets: ['es2015']
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader'
            }
        ]
    },

    resolve: {
        root: path.resolve('./src')
    }

};
