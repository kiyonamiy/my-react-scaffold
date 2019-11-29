const path = require('path');
module.exports = {
    target: "node",         // 在 nodejs 环境中执行
    mode: "development",
    entry: {
        app: path.join(__dirname, '../client/server.entry.js'),
    },
    output: {
        filename: 'server-entry.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/public',
        libraryTarget: 'commonjs2',     // 模块打包方案
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                loader: 'babel-loader',
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules'),
                ]
            },
        ]
    },
}