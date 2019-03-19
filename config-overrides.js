const {
    addLessLoader,
    fixBabelImports,
    override
} = require("customize-cra");

module.exports = override(
  fixBabelImports('antd-mobile', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: true,
  }),
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A',
      '@font-size-base': '16px',
    },
  }),
);
