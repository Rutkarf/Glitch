const path = require('path');

module.exports = {
    entry: './assets/js/R4V3tokenTHREE.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        resolve: {
            alias: {
              'three': path.resolve(__dirname, 'node_modules/three/build/three.module.js')
    },
        
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};