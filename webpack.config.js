

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { CheckerPlugin, TsConfigPathsPlugin } = require('awesome-typescript-loader');
const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = () => ({
  devtool: 'inline-source-map',
  entry: {
    'basement-lab': [
      'babel-polyfill',
      // './src/index.tsx',
      SRC_DIR,
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(SRC_DIR, 'components'),
    },
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [
          { loader: 'source-map-loader' },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'awesome-typescript-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              // cacheDirectory: true,
            },
          },
          { loader: 'stylelint-custom-processor-loader' },
          { loader: 'eslint-loader' },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),

    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
      // disable: !env.prod, // SEE: https://github.com/gaearon/react-hot-loader/tree/next#webpack-extracttextplugin--commonmoduleplugin
    }),

    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),


    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html'),
    }),

    new StyleLintPlugin({ syntax: 'scss' }),

    new TsConfigPathsPlugin(),

    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      API_HOST: 'localhost:4000',
      HOST: '0.0.0.0',
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,

    stats: {
      assets: false,
      children: false,
      chunks: false,
      env: true,
      modules: false,
      moduleTrace: false,
      performance: true,
      publicPath: false,
      source: true,
    },
  },
});
