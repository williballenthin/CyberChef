const webpack = require("webpack");
const path = require("path");

/**
 * Webpack configuration for minimal runtime CommonJS build
 *
 * This configuration bundles CyberChef for use in minimal JavaScript runtime
 * environments that don't provide Node.js APIs. All dependencies and polyfills
 * are bundled into the output file.
 *
 * @author Willi Ballenthin [wballenthin@hex-rays.com]
 * @license Apache-2.0
 */

const banner = `/**
 * CyberChef - The Cyber Swiss Army Knife
 *
 * @copyright Crown Copyright 2016-2025
 * @license Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */`;

module.exports = {
    mode: "production",
    target: ["web", "es2020"],
    entry: "./src/node/index.mjs",
    output: {
        path: path.resolve(__dirname, "build/node"),
        filename: "CyberChef.js",
        library: {
            type: "commonjs2"
        },
        globalObject: "this"
    },
    resolve: {
        extensions: [".mjs", ".js", ".json"],
        alias: {
            "./config/modules/OpModules.mjs": "./config/modules/Default.mjs"
        },
        fallback: {
            "fs": false,
            "child_process": false,
            "net": false,
            "tls": false,
            "path": require.resolve("path-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "buffer": require.resolve("buffer/"),
            "process": require.resolve("process/browser"),
            "vm": require.resolve("vm-browserify"),
            "util": require.resolve("util/"),
            "os": require.resolve("os-browserify/browser"),
            "assert": require.resolve("assert/"),
            "url": require.resolve("url/"),
            "querystring": require.resolve("querystring-es3"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "events": require.resolve("events/"),
            "domain": false,
            "constants": require.resolve("constants-browserify"),
            "timers": require.resolve("timers-browserify")
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules\/(?!crypto-api)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        configFile: path.resolve(__dirname, "babel.config.js"),
                        cacheDirectory: true
                    }
                },
                type: "javascript/auto"
            },
            {
                test: /\.json$/,
                type: "json"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"]
        }),
        new webpack.BannerPlugin({
            banner: banner,
            raw: true,
            entryOnly: true
        }),
        new webpack.DefinePlugin({
            "process.browser": "true",
            // Provide process.versions.node so isNodeEnvironment() works
            // This allows the bundle to work in both real Node.js and
            // environments with Node.js polyfills (like STPyV8/PythonMonkey)
            "process.versions.node": JSON.stringify("18.0.0")
        })
    ],
    optimization: {
        minimize: false,
        nodeEnv: false
    },
    stats: {
        children: false,
        chunks: false,
        modules: false,
        entrypoints: false
    },
    ignoreWarnings: [
        /source-map/,
        /source map/,
        /dependency is an expression/,
        /export 'default'/,
        /Can't resolve 'sodium'/
    ],
    performance: {
        hints: false
    }
};
