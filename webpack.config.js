module.exports = {    
    entry: "./index.web.js",
    output: {
        filename: "web/js/bundle.js",
        sourceMapFilename: "web/js/bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};
