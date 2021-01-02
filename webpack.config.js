const webpack = require('webpack');
const path = require('path');
const glob = require("glob");

module.exports = (env, argv) => {
    //const IS_DEVELOPMENT = argv.mode === 'development';

    const srcDir = "./src";
    const entries = glob.sync(
        "**/*.js", {
            ignore: "**/_*.js",
            cwd: srcDir,
        }
    )
    .map(function (key) {
        return [key, path.resolve(srcDir, key)];
    });

    const entryObjects = Object.fromEntries(entries);

    return {
        entry: entryObjects,
        output: {
            filename: '[name]',
            path: path.join(__dirname, 'dist/js')
        },
        optimization: {
            splitChunks: {
                name: 'vendor.js',
                chunks: 'initial',
                minChunks: 10
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery'
            })
        ]
    }
};
