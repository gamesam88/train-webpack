const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: {
        app: '/src/index.js',
    },
    performance: {
        hints: false
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
        // assetModuleFilename: 'assets/[hash][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new CopyPlugin({
            patterns: [{
                from: './src/assets', to: 'assets', noErrorOnMissing: true,
            }],
        }),
    ]
    ,
    mode: 'production',
    module: {
        rules: [{
            test: /\.(gif|png|jpg|jpeg|svg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        ]
    }
};