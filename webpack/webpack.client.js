const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: './src/client/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(process.cwd(), 'client_build')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: process.env.NODE_ENV
            }
        })
    ]
});
