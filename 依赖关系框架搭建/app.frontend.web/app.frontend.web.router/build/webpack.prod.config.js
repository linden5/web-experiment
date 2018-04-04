const merge = require('webpack-merge')
const devConfig = require('./webpack.dev.config')

module.exports = merge(devConfig, {
    mode: 'production'
})