module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      port: 5555
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }

};
