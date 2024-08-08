import path from 'path';

export default {
  entry: {
    main: './server.js'
  },
  output: {
    path: path.join(path.resolve(), 'dist'),
    publicPath: '/',
    filename: '[name].js',
    clean: true
  },
  mode: 'development',
  target: 'node',
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};
