const path = require("path");
const webpack = require("webpack");
const getClientEnvironment = require("../env");

// variables
var sourcePath = path.join(__dirname, "../../src");
var outPath = path.join(__dirname, "../../build/dist");

const publicUrl = "";
const env = getClientEnvironment(publicUrl);

module.exports = {
  mode: "production",
  devtool: 'inline-source-map',
  resolve: {
      extensions: [".js", ".ts", ".tsx"]
  },
  entry: {
      main: path.join(sourcePath, "RootApp.tsx")
  },
  output: {
      filename: "[name].js",
      chunkFilename: "[name].chunk.js",
      path: outPath + "/app/",
      library: process.env.APP_MODULE_NAME,
      libraryTarget:"amd"
  },
  module: {
      rules: [
        {
          test : /\.html$/,
          use : "html-loader"
        },
        {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: "ts-loader"
        },
        {
          test: /\.css$/,
          loader: ["style-loader", "css-loader"],
        },
        {
          test: /\.(scss|sass)$/,
          loader: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test:/\.(png|svg|ico|jpg|gif)$/,
          use: "file-loader"
        }
      ]
  },
  plugins:[
    new webpack.DefinePlugin(env.stringified),
  ],
}