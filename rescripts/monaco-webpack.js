const {appendWebpackPlugin} = require('@rescripts/utilities')
const  MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = appendWebpackPlugin(
  new MonacoWebpackPlugin({
    languages: ['typescript']
  })
)
