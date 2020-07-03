const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleNotFoundPlugin = require("react-dev-utils/ModuleNotFoundPlugin");
const getClientEnvironment = require("../env");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const sourcePath = path.join(__dirname, "../../src");
const publicPath = path.join(__dirname, "../../public");
const outPath = path.join(__dirname, "../../build/dist");

const env = getClientEnvironment(publicPath);

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: {
    main: path.join(sourcePath, "Index.tsx"),
  },
  output: {
    filename: "static/js/[name].[hash].js",
    chunkFilename: "static/js/[name].[hash].chunk.js",
    path: outPath,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
        exclude: /node_modules/
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|ico|jpg|gif)$/,
        use: "file-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(publicPath, "index.html"),
      file: "./index.html",
      inject: true,
    }),
    new ModuleNotFoundPlugin("."),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new CopyPlugin([
      {
        from: "public",
        ignore: ["index.html"],
        force: true,
      },
    ]),
    new CleanWebpackPlugin({ template: "../../build/dist/static/js" }),
  ],
};
