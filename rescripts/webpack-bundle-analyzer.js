const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { appendWebpackPlugin } = require('@rescripts/utilities')

module.exports = appendWebpackPlugin(new BundleAnalyzerPlugin())
