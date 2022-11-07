const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

const client = {
  ...config,
  name: 'client',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    port: 3000,
    static: './dist',
    hot: true,
  },
};

const staticSiteGenerator = {
  ...config,
  name: 'static site generator',
  target: 'node',
  entry: './staticSiteGenerator/bootstrap.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '.generator'),
    clean: true,
  },
  externals: [nodeExternals()],
};

module.exports = [client, staticSiteGenerator];
