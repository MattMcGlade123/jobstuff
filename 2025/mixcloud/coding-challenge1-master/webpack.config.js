var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: ''
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true
        }
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
