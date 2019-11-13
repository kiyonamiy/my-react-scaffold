const path = require('path');

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
                test: /.jsx?$/,
                loader: 'babel-loader',
            },
            
        ]
    }
}