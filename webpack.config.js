const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//     .BundleAnalyzerPlugin;

module.exports = {
    mode: "development",
    //start building webpack from this point
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    //where webpack will produce its output
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            filename: "index.html",
            template: "src/home.html",
            favicon: "./src/assets/images/logoAventus.png",
        }),
         new HtmlWebpackPlugin({
            title: "Webpack App",
            filename: "stage.html",
            template: "src/stage.html",
            favicon: "./src/assets/images/logoAventus.png",
        }),
        new HtmlWebpackPlugin({
            title: "Webpack App",
            filename: "stagedetail.html",
            template: "src/stagedetail.html",
            favicon: "./src/assets/images/logoAventus.png",
        }),
        new HtmlWebpackPlugin({
            title: "Webpack App",
            filename: "error.html",
            template: "src/error.html",
            favicon: "./src/assets/images/logoAventus.png",
        }),
    ],
};
