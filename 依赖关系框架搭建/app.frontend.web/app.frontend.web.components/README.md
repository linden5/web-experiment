# 公共组件模块

当前包含了两个组件：
* 首页头部
* 非首页头部

首页头部有没有返回按钮，非首页头部有返回按钮

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

```

## 发布截图
![components.png](./image/components.png)