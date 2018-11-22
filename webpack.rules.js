const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin'); //引入插件
module.exports = [{
    test: /\.vue$/,
    use: 'vue-loader'
}, {
    test: /\.css$/,
    loader: 'style-loader!css-loader!autoprefixer-loader'
        //顺序是反过来的2!1
}, {
    test: /\.less$/,
    loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
}, {
    test: /\.(png|jpg|gif|svg|ttf|woff|woff2)$/,
    use: [{
        loader: 'url-loader',
        options: {
            limit: 8192,
            name: '[name].[ext]'
        }
    }]
}, {
    test: /\.js$/,
    use: [{
        loader: 'babel-loader',
        options: {
            presets: ['es2015'],
            plugins: ['transform-runtime']
        }
    }],
    // 不检查node_modules下的js文件
    exclude: "/node_modules/"
}]
