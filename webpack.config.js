var webpack = require("webpack");
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
            /*
            {
                test: /\.js$/,
                loader: 'babel',
                //exclude: /node_modules/,
                query: {
                    presets: [
                        'es2015',
                    ]
                }
            }
            */
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
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'jquery': '$',
    },
    plugins: [
        //new webpack.IgnorePlugin(/react/),
        //new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ]
}
