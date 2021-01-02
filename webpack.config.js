const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',// TODO
    entry: {
        index: './src/index.js',
        list: './src/list.js',
      },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist/js')
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial',
            minChunks: 1
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery'
        })
    ]
};
