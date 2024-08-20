const path = require('path');

module.exports = {
	mode: 'development',
    entry: './src/index.mjs',
    output: {
        path: path.resolve('./public/dist'),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /.(js|jsx|mjs)$/,
				exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}

