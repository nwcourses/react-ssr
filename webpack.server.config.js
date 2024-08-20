const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'development',
	target: 'node',
    entry: './server/index.mjs',
	externals: [nodeExternals()],
    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /.(js|jsx|mjs)$/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}

