# @gfloan/app.frontend.web.scaffold

> 首先是从vue-cli webpack模板生成的项目原有的说明
> A scaffold project based on vue-cli webpack template

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