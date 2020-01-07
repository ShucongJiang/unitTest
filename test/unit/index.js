import Vue from 'vue'

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)

// require.context函数接受三个参数
// directory {String} -读取文件的路径
// useSubdirectories {Boolean} -是否遍历文件的子目录
// regExp {RegExp} -匹配文件的正则

const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)
