const merge = require('webpack-merge')
const {
  compileJS,
  copyFiles,
  genSourceMaps,
  injectStyles,
  loadDevImgs,
  setMode,
} = require('../parts')
const { COMMON, FRONT, NODE_MODULES } = require('../../PATHS')

// eslint-disable-next-line no-console
console.log('🤡📦 STARTING FRONTEND DEVELOPMENT BUILD PROCESS 📦🤡')

module.exports = merge([
  {
    output: {
      path: FRONT.BUILD_DEV,
    },
  },

  setMode('development'),

  compileJS({
    include: [FRONT.SRC, COMMON, `${NODE_MODULES}/eswiss`],
    options: {
      presets: [['@babel/preset-react', { development: true }]],
    },
  }),

  copyFiles([{ from: 'src/front/util/dev.js' }]),

  genSourceMaps('cheap-module-eval-source-map'),

  injectStyles({
    cssLoaderOptions: { sourceMap: true },
    postCSSLoaderOptions: { config: { path: 'webpack' }, sourceMap: true },
    sassLoaderOptions: { sourceMap: true },
  }),

  loadDevImgs(),
])
