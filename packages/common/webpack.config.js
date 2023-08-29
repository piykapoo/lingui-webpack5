const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(js|mjs)$/,
        include: /node_modules/,
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        type: 'javascript/auto'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  externals: [
    nodeExternals({
      additionalModuleDirs: ['../../node_modules']
    })
  ],
  plugins: [new CleanWebpackPlugin()]
};
