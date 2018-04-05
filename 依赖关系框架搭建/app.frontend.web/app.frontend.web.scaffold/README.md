# 脚手架项目

直接把home模块复制过来的。因为前后复制了几次，可能有些地方和home项目不一致。

当前存在的问题是：gulp复制该文件夹的时候，以"."开头的，如.babelrc,.gitignore等都复制不过来

虽然考虑过把这个项目单独开一个仓库，直接用 
> vue init <git repo path> 
这样的的形式初始化，但考虑到最终提交是要放到同一个仓库里面的，最后放弃了上面的做法，改成使用gulp

## 构建命令

``` bash
# 监听文件变化并重新打包，用于在app.frontend.web项目中进行开发,需要执行yarn link
yarn run watch

# 在本项目中进行开发，实时看到修改情况
yarn run dev
# 或
yarn run start

# 单元测试
yarn run unit
# 或
yarn run test

# 代码规范检查
yarn run lint

# 项目打包，用于在app.frontend.web项目中进行开发
yarn run devbuild

# 项目发布前打包
yarn run build

# 生成文档
yarn run doc

# 打包并发布到npm库
yarn run pub

# 重新安装依赖并发布到npm库
yarn run repub

# 重新安装依赖并进入本地开发模式
yarn run redev

# 重新安装依赖并发布到npm库，并且提交到远程git
yarn run pp <你的git提交信息>
```

## 文件夹说明

build:构建配置脚本
config:构建配置使用的一些变量
mock: mock服务器
src: 源代码
|__assets: css，图片
|__backend: 调用后端接口的函数
|__components: 组件
|__locales: 国际化文字定义
|__validation:校验函数等
test: 单元测试