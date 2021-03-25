const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "development",
  entry: "./server.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(jpg|png|gif|svg|ico)$/i,
        use: "url-loader?limit=8192"
      }
    ]
  }
};
