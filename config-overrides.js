// eslint-disable-next-line @typescript-eslint/no-require-imports
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

module.exports = override(
  // 配置路径别名
  addWebpackAlias({
    types: path.resolve(__dirname, 'src/types')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A'
    }
  })
);
