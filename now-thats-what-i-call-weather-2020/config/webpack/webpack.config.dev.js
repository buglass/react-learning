const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const path = require("path");

const publicPath = path.join(__dirname, "../../public");

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  devServer: {
    compress: true,
    contentBase: publicPath,
    watchContentBase: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    },
    allowedHosts: ["localhost"],
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});
