module.exports = {
    entry: ['webpack/hot/dev-server', './utils.js', './js/index'],
    output: {
        filename: "build/bundle.js"
    },
    watch: true,
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.html$/, exclude: /node_modules/, loader: 'raw-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.es6$/, loader: 'babel-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6'],
        alias: {
            $: "jquery/dist/jquery"
        }
    }

}