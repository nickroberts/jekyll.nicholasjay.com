const path = require('path');

module.exports = {
  entry: {
    app: './_src/index.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: `${path.resolve(__dirname, '../')}/js`
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
