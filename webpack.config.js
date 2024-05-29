const path = require("path");

module.exports = {
    mode: "development",
    entry: "./scripts/index.js",
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        port: 9000,
    },
    resolve: {
        fallback: {
            "location": false,
            "navigator": false,
            "xmlhttprequest": false,
            "jsdom": false
        }
    }
}