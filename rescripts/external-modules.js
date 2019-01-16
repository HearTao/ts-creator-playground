module.exports = config => {
    config.externals = {
        typescript: 'ts',
        prettier: 'prettier',
        "ts-creator": 'tsCreator',
        "prettier-typescript-plugins": {
          commonjs: 'prettier/parser-typescript',
          commonjs2: 'prettier/parser-typescript',
          root: ['prettierPlugins', 'typescript']
        }
      }
    return config
  }