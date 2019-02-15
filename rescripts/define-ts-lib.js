const { editWebpackPlugin } = require('@rescripts/utilities')
const fs = require('fs')

module.exports = config => {
  let tsLib = fs.readFileSync('./node_modules/typescript/lib/typescript.d.ts').toString()
  const template = `
    declare module 'typescript' {
      ${tsLib}
    }
  `
  return editWebpackPlugin(
    p => {
      p.definitions['process.env'].tsLib = JSON.stringify(template)
      return p
    },
    'DefinePlugin',
    config,
  )
}
