const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
const rulesConfig = require("./webpack.rules.js");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: rulesConfig
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextWebapckPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
