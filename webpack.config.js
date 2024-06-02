const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

class UpdateDatePlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap('UpdateDatePlugin', (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('UpdateDatePlugin', (data, cb) => {
                const date = new Date();
                const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
                data.html = data.html.replace(/<time class="small">Last updated: .*?<\/time>/, `<time class="small">Last updated: ${formattedDate}</time>`);
                cb(null, data);
            });
        });
    }
}

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.json$/,
                type: 'json'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/'
                        }
                    }
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'],
        fallback: {
            "location": false,
            "navigator": false,
            "xmlhttprequest": false,
            "jsdom": false
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            favicon: "./src/favicon.ico"
        }),
        new UpdateDatePlugin(),
    ]
}
