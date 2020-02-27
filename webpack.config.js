const webpack = require('webpack')
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const configuration = require('./config')

const TARGET = process.env.NODE_ENV || 'development'

const SERVE = process.env.SERVE || 'build'

// SERVE=build NODE_ENV=production is to build the production version (For the CI)

// SERVE=development NODE_ENV=development is to serve the dev version on the dev server

// SERVE=development NODE_ENV=production is to serve the production version on the dev server

const config = {
  mode: TARGET,
  stats: 'errors-warnings',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          enforce: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    }
  },
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    publicPath: TARGET === 'production' ? '/' : '/dist/',
    path: path.join(__dirname, 'dist'),
    filename:
      TARGET === 'development' ? '[name].bundle.js' : '[name].bundle.[hash].js',
    chunkFilename:
      TARGET === 'development' ? '[name].bundle.js' : '[name].bundle.[hash].js',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)\/|.[sS]pec\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              minimize: TARGET === 'production'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')()
              ]
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: '@import "./src/styles/variables";',
              outputStyle: TARGET === 'production' ? 'compressed' : 'expanded',
              sourceMapContents: true,
              includePaths: [
                path.join(__dirname, 'src/assets/scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'css/fonts/[name].[ext]',
          publicPath: TARGET === 'production' ? '/' : '/dist/'
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/imgs/[name].[ext]',
          publicPath: TARGET === 'production' ? '/' : '/dist/'
        }
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /\.spec\.js$/
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename:
        TARGET === 'production'
          ? 'css/[name].bundle.[hash].css'
          : 'css/[name].bundle.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
      minify: TARGET === 'production',
      //favicon: path.join(__dirname, 'assets/favicon.ico'),
      inject: false,
      env: {
        production: TARGET === 'production'
      }
    })
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.common'
    }
  }
}

let conf = config
if (TARGET === 'production') {
  conf = merge.smart(config, {
    plugins: [
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify('production'),
        API_URL: JSON.stringify(configuration.production.apiURL),
        WIP: JSON.stringify(configuration.production.WIP)
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),
      new CompressionPlugin({
        // test: /\.bundle.js$/,
        filename: '[path].gz[query]',
        test: /\.(js|css|html|svg|png|jpe?g)$/,
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8
      })
    ],
    optimization: {
      minimizer: [new TerserPlugin({
        cache: true,
        parallel: true,
        extractComments: true
      })]
    }
  })
} else {
  conf = merge.smart(config, {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(false),
        'process.env.NODE_ENV': JSON.stringify('development'),
        API_URL: JSON.stringify(configuration.development.apiURL),
        WIP: JSON.stringify(configuration.development.WIP)
      })
    ]
  })
}

if (SERVE === 'development' || SERVE === undefined) {
  console.log('start dev server')

  conf = merge(config, {
    devServer: {
      port: 3040,
      hot: true,
      inline: true,
      host: '0.0.0.0',
      historyApiFallback: {
        disableDotRule: true
      },
      stats: 'errors-only',
      contentBase: path.join(__dirname, 'dist/')
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: true
      }),
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(false),
        'process.env.NODE_ENV': JSON.stringify('development'),
        API_URL: JSON.stringify(configuration.development.apiURL),
        WIP: JSON.stringify(configuration.development.WIP)
      }),
      new webpack.HotModuleReplacementPlugin({
        multiStep: false
      })
    ],
    devtool: 'eval-source-map'
  })
}

module.exports = conf
