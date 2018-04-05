# 公共页子模块

包含400,401,403,404,500,503等错误页面，以及页面底部带有导航栏的页面模板PageFrame。
PageFrame是为主页Home与理财Finance共用

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目说明
该脚手架项目基于vue-cli webpack模板，依照开发中的实际需要进行了一些调整
* 为了去除重复依赖，向webpack插件配置中添加了webpack.optimize.DedupePlugin