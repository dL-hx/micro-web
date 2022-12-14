const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const packageName = 'vue2';
const port = 9080;

module.exports = {
  outputDir: 'dist', // 打包的目录
  assetsDir: 'static', // 打包的静态资源
  filenameHashing: true, // 打包出来的文件，会带有hash信息
  publicPath: `http://localhost:${port}`,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: false,
    disableHostCheck: true,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*', // 本地服务的跨域内容
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式 commonjs 浏览器，node环境
      libraryTarget: 'umd',
      filename: `${packageName}.js`,
      library: `${packageName}`,// 可以通过window.vue2 获取应用的内容
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
};
