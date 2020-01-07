# vue unit test (karma和Mocha)

> A Vue.js project For Unit Test

## Build Setup

``` bash
# install dependenciesN
npm install vue-cli

# init project
vue init webpack unittest 

项目名字不能有大写字母，不然会报错提示：
 Sorry, name can no longer contain capital letters.

# 初始化项目可能会出错，因为phantomjs包下载很慢
可以另外下载，直接解压然后，window配置环境变量指向bin目录下的phantomjs.exe就可以了

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```