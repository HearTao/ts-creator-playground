const { editWebpackPlugin } = require('@rescripts/utilities')
const fs = require('fs')

module.exports = config => {
  const tsLib = fs.readFileSync('./node_modules/typescript/lib/typescript.d.ts').toString()

  return editWebpackPlugin(
    p => {
      p.definitions['process.env'].tsLib = JSON.stringify(tsLib)
      return p
    },
    'DefinePlugin',
    config,
  )
}
