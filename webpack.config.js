const webpack = require('webpack');
const path = require('path');

module.exports = {
    // モードの設定。指定可能な値は、none, development ,production（デフォルト）
    // https://webpack.js.org/concepts/mode/#mode-development
    mode: 'development',
    // アプリケーションが実行を開始されるポイント(エントリーポイント)
    // 配列で指定すると、すべての項目が実行される
    // https://webpack.js.org/configuration/entry-context/#entry
    entry: {
        index: './src/index.js',
        list: './src/list.js',
      },
    output: {
        filename: '[name].bundle.js',
        // ビルド後のファイルが出力される"絶対パス"ディレクトリ
        // https://webpack.js.org/configuration/output/#outputpath
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
