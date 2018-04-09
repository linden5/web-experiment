# web模块

顶级模块，依赖子模块实现相关功能，本模块的入口文件主要用于处理子模块和依赖度的配置

因为是多模块开发，所以在开发之前需要进行npm link，以将对子模块的依赖指向对应模块的本地文件夹

然而，尽管这样做了之后开发起来方便了很多，但还是不够流畅：
 
如果使用gulp脚本在所有子模块中执行webpack --watch，在我的机器(window7,4G内存，i3处理器)上体感会非常卡，所以我放弃了这种做法（脚本还是留下了）

实际上，我的开发方式是：
1. 在web项目中进行npm link
> yarn run plink

2. 启动webpack-dev-server
> yarn run dev

3. 去需要开发的子文件夹中执行webpack --watch
> yarn run watch

4. 如果watch不一定有效(特指router项目，可能是因为配置上还有问题),手动devbuild
> yarn run devbuild

## 构建命令

``` bash
# 对项目依赖进行npm link，以适应本地开发
yarn run plink

# 以scaffold项目为模板，在目标文件夹中生成新项目，项目名为@gfloan/<目标文件夹>
yarn run gen <目标文件夹>

# 开发模式,先对每个子项目打包，然后执行yarn run dev
yarn run serve

# 发布所有项目到npm仓库，并git提交后push
yarn run publishall --m <git提交信息> --new-version <所有项目统一的版本号>

# 安装所有子项目的依赖,可能会卡
yarn run installall

# 在本项目中进行开发，实时看到修改情况，一般我用这个命令
yarn run dev
# 或
yarn run start

# 单元测试
yarn run unit
# 或
yarn run test

# 代码规范检查
yarn run lint

# 项目发布前打包
yarn run build

# 更新@gfloan的依赖，实际使用的时候好像有问题
yarn run up

# 重新安装依赖并发布到npm库
yarn run repub

# 重新安装依赖并进入本地开发模式
yarn run redev

# 启动mock服务器,mock服务器在./mock文件夹中
yarn run mock
```

## 有关mock服务器的说明
mock数据放在./mock/data文件夹下，当前只写了get方法,请求路径为http://localhost:3000/mock/<path>
> 例如：请求路径是**/mock/hello**，则会读取./mock/data/hello.js中的data返回

因为webpack-dev-server是8080端口，所以需要在config/index.js中配置proxyTable以解决跨域问题
