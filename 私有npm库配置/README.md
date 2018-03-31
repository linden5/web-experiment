# 私有npm库配置

verdaccio启动后输出
>  warn --- config file  - C:\Users\lyx\AppData\Roaming\verdaccio\config.yaml

>  warn --- http address - http://localhost:4873/ - verdaccio/2.7.4

## registry设置
npm 设置registry:
>  npm config set registry http://localhost:4873
verdaccio的配置文件中增加淘宝镜像的uplink设置，并修改一些配置，如下所示

```
# a list of other known repositories we can talk to
uplinks:
  npmjs:
    url: https://registry.npmjs.org/
  taobao:
    url: https://registry.npm.taobao.org/
packages:
  '@*/*':
    # scoped packages
    access: $all
    publish: $authenticated
    proxy: taobao

  '**':
    # allow all users (including non-authenticated users) to read and
    # publish all packages
    #
    # you can specify usernames/groupnames (depending on your auth plugin)
    # and three keywords: "$all", "$anonymous", "$authenticated"
    access: $all

    # allow all known users to publish packages
    # (anyone can register by default, remember?)
    publish: $authenticated

    # if package is not available locally, proxy requests to 'npmjs' registry
    proxy: taobao
```

## 发布使用私有库的项目
1.  添加账号gfloan并登录
> npm adduser --registry http://localhost:4873
2.  在项目的package.json中将"private"属性设置为false