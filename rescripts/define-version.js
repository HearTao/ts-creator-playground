const { editWebpackPlugin } = require('@rescripts/utilities')
const fs = require('fs')

module.exports = config => {
  const packageJson = JSON.parse(
    fs.readFileSync('./node_modules/ts-creator/package.json').toString(),
  )

  return editWebpackPlugin(
    p => {
      p.definitions['process.env'].VERSION = JSON.stringify(packageJson.version)
      return p
    },
    'DefinePlugin',
    config,
  )
}
