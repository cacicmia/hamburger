const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/js/index.js'),
   
    output: {
        filename: 'main.js',
    //     path: path.resolve(__dirname, './dist/js/'),

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
           
          ]
    },

}