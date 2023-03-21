const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');

/*
  Because I didn't bother making CSS part of my
  webpack workflow I'm just manually copying our CSS 
  file to the DIST folder. 
*/
class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap('Copy files', function () {
      fse.copySync('./app/main.css', './dist/main.css');
      fse.copySync('./app/public', './dist/public');
    });
  }
}

config = {
  entry: ['./app/Main.js', './app/script.js'],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'app'),
    filename: 'bundled.js',
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      favicon: 'app/public/favicon.ico',
      filename: 'index.html',
      template: 'app/index-template.html',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              ['@babel/preset-env', { targets: { node: '12' } }],
            ],
          },
        },
      },
    ],
  },
};

if (currentTask == 'webpackDev' || currentTask == 'dev') {
  config.devtool = 'source-map';
  config.devServer = {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'app'),
    },
    hot: true,
    liveReload: false,
    historyApiFallback: { index: 'index.html' },
  };
}

if (currentTask == 'webpackBuild') {
  config.plugins.push(new CleanWebpackPlugin(), new RunAfterCompile());
  config.mode = 'production';
  config.output = {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  };
}

module.exports = config;
