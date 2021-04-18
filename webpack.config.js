const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: "./src/index.js"
    // register: "./src/register.js"
  },
  output: {
    path: path.resolve(__dirname, "server/dist"),
    filename: "[name].bundle.js"
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 9000,
    historyApiFallback: true
  },
  devtool: "source-map",
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          // "style-loader",
          // Translates CSS into CommonJS
          "css-loader"
          // Compiles Sass to CSS
          // "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    }),
    new MiniCssExtractPlugin()
  ]
};
