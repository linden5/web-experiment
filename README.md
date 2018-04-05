# Front End Web Development Experiment Documentation

## 环境搭建
1.  [私有npm仓库搭建](./tree/master/私有npm库配置)
2.  全局安装[yarn](https://yarn.org.cn/)
>   npm i -g yarn
3.  全局安装webpack(全局安装^4.0.0以上版本webpack-cli所需要，^3.0.0不用执行3、4步骤)
>   npm i -g webpack
4.  全局安装webpack-cli
>   npm i -g webpack-cli
5.  全局安装gulp-cli
>   npm i -g gulp-cli
6.  设置git别名命令cmp(看过提交记录后我发现,yarn publish是会自动提交的)
>   git config --global alias.cmp '!f() { git add -A && git commit -m "$@" && git push; }; f'
>   用法：git cmp "提交信息"
