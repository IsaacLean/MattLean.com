const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/**
 * Build styles
 */
exports.buildStyles = ({ cssLoaderOptions, sassLoaderOptions } = {}) => ({
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssLoaderOptions,
          },
          {
            loader: 'sass-loader',
            options: sassLoaderOptions,
          },
        ],
      },
    ],
  },
})

/**
 * Delete the build folder if it exists
 */
exports.cleanBuild = () => ({
  plugins: [new CleanWebpackPlugin()],
})

/**
 * Compile JavaScript with Babel
 */
exports.compileJS = ({ exclude, include, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude,
        include,
        use: {
          loader: 'babel-loader',
          options,
        },
      },
    ],
  },
})

/**
 * Generate source maps for JavaScript
 */
exports.genSourceMaps = (type) => ({
  devtool: type,
})

/**
 * Inject styles.
 * 1. Compiles Sass to CSS with sass-loader
 * 2. Interprets @import and url() like import/require() and resolves them with css-loader
 * 3. Injects CSS into DOM with style-loader
 */
exports.injectStyles = ({
  cssLoaderOptions,
  sassLoaderOptions,
  styleLoaderOptions,
} = {}) => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
            options: styleLoaderOptions,
          },
          {
            loader: 'css-loader',
            options: cssLoaderOptions,
          },
          {
            loader: 'sass-loader',
            options: sassLoaderOptions,
          },
        ],
      },
    ],
  },
})

/**
 * Setup development server with webpack-dev-server
 */
exports.setupDevServer = (options) => ({
  devServer: {
    ...options,
  },
})

/**
 * Setup HTML with html-webpack-plugin
 */
exports.setupHTML = (options) => ({
  plugins: [new HtmlWebpackPlugin({ ...options })],
})
