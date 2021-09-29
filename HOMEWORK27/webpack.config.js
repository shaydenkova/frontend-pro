const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development', //production, default is none
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
        //css
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        //images
        { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
      ]
}