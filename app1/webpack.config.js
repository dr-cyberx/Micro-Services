const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFedrationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
