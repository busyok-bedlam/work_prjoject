
let port = 3005;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        host: 'localhost',
        port: port
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "FORT_CADE_APP",
            template: path.join(__dirname,'src','index.ejs')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "source-map"
}

module.exports = config;