const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.(sa|sc|c)ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // Have to specify a template file because the auto-generated html file 
        // needs an element with id="root" for react's index.tsx
        new HtmlWebpackPlugin({ title: 'Minesweeper', template: './src/index.html', favicon: './favicon.png' }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: 'inline-source-map',
    devServer: { contentBase: './dist', stats: 'errors-only' }
};
