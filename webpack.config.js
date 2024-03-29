const path =  require('path')

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath:'dist/'
    },
    mode: 'none',
    module:{
        rules: [
            { test: /\.jpg$/, use: 'file-loader' }
          ]
    }
};