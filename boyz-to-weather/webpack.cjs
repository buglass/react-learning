const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: 'awesome-typescript-loader'
            },
            { 
                test: /\.css$/i, 
                use: ['style-loader', 'css-loader']
            },
            { 
                test: /\.svg$/, 
                loader: 'svg-sprite-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "/public")
    }
}