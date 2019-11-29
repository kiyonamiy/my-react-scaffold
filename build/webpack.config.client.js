const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: {
        app: path.join(__dirname, '../client/app.js'),  // app 为自定义，为打包后输出的 name
    },
    output: {
        filename: '[name].[hash].js',   // name === app
        path: path.join(__dirname, '../dist'),
        publicPath: '/public',          // 前缀区分静态文件
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                loader: 'babel-loader',
            },
            // 不希望 node_modules 下文件重新编译，所以拆出来，否则 build 报错
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules'),
                ]
            },
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../client/template.html'),
        }),
    ]
}