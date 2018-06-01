module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'production',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: [
    'babel-polyfill', // Polyfillも含める
    './src/app.js',
  ],
  // ファイルの出力設定
  output: {
    // 出力ファイル名
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // env を指定することで、ES2017 を ES5 に変換。
                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                // webpack の Tree Shaking 機能が使えない
                ['env', {'modules': false}]
              ]
            }
          }
        ],
        // node_modules は除外する
        exclude: /node_modules/,
      }
    ]
  },
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
