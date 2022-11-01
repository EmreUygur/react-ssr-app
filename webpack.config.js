const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

// module.exports = {
//   entry: './src/index.tsx',
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'babel-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'src/index.html', // to import index.html file inside index.js
//     }),
//   ],
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   devServer: {
//     port: 3000,
//     static: './dist',
//     hot: true,
//   },
// };

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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};

const server = {
  ...config,
  name: 'server',
  target: 'node',
  entry: './server/bootstrap.ts',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [nodeExternals()],
  devServer: {
    port: 3000,
    static: './dist',
    hot: true,
  },
};

module.exports = [client, server];
