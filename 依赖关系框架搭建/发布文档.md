# 发布文档

## 本地chrome截图
![首页](./image/home.png)

## 发布说明
打包完成之后，需要将app.frontend.web/dist下的所有文件上传到生产服务器

如果需要运行该发布包，需要一个文件服务器，实现方式有很多种，可以用nodejs写，也可以用java写

但比较简单的做法(我做过的做法)是**使用Nginx搭建一个文件服务器**，比如[我使用vue做的这个应用](https://diandain.cn/invest-doc/)