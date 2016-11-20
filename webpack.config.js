var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    /*
    entry: {
        app: './main.js',
        vendor: [
            'react',
            'react-dom',
        ],
    },
    output: {
        publicPath: '/static/',
        filename: 'build.js',
    },
    */
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'es2015',
                    ]
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'react',
                    ],
                },
            },
            {
                test: /\.less$/,
                //loader: 'style-loader!css-loader!less-loader?strictMath&noIeCompat',
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
            },
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'jquery': '$',
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        //new webpack.IgnorePlugin(/react/),
        //new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ]
}
