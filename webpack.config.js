module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets:['react', 'es2015']
                }
            },
            {
                test: /\.(css|scss)$/,
                exclude: /(node_modules)/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                exclude: /(node_modules)/,
                loader: 'url-loader'
            }
        ]
    }
};
