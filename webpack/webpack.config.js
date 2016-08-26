var webpack = require('webpack');

module.exports = {
    entry: {
        'a': __dirname + '/js/a',
        vendor: ['jquery', 'bootstrap']
    },
    output: {
        path: __dirname + '/bundle',
        filename: '[name].js'

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"

        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ],
    },
    resolve: {
        alias: {
            validate: __dirname + '/jquery/jquery.validate',
        }
    }
};
