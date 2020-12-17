const path = require("path");
//const dotenv = require("dotenv");
HtmlWebpackPlugin = require("html-webpack-plugin");
const MODE = "development";
// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";
module.exports = {
  //env: dotenv.config().parsed,
  //メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,
  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ名
    path: path.resolve(__dirname, "dist"),
    // 出力ファイル名
    filename: "main.js",
  },
  mode: MODE,
  devServer: {
    contentBase: "dist",
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    //new webpack.DefinePlugin({
    //  "process.env": JSON.stringify(env),
    //}),
  ],
  // ES5(IE11等)向けの指定
  target: "web",
};
