const exec = require('child_process').exec
const path = require('path')
const gulp = require('gulp')
const replace = require('gulp-replace')
const minimist = require('minimist')
const chalk = require('chalk')
const TEMPLATE_PATH = path.resolve(__dirname, '../app.frontend.web.scaffold')

var argv = minimist(process.argv.slice(3))

// 从脚手架项目生成模板项目
var destName = argv.d
var destPath = path.resolve(__dirname, '../' + destName)
gulp.task('generate', () =>{
    gulp.src([TEMPLATE_PATH + '/**/*', '!' + TEMPLATE_PATH + '/node_modules/**', '!' + TEMPLATE_PATH + '/package.json'])
        .pipe(gulp.dest(destPath))
    gulp.src(TEMPLATE_PATH + '/package.json')
        .pipe(replace('<%=projectName>', destName))
        .pipe(gulp.dest(destPath))
})

// 项目文件夹定义
const PROJ_PATH = path.resolve(__dirname, '../')
const ROUTER_PATH = path.resolve(__dirname, '../app.frontend.web.router')
// 需要进行构建的子项目
var buildProjects = [
    path.resolve(__dirname, '../app.frontend.web.components'),
    path.resolve(__dirname, '../app.frontend.web.store'),
    path.resolve(__dirname, '../app.frontend.web.utils'),
    ROUTER_PATH,
    path.resolve(__dirname, '../app.frontend.web.common'),
    path.resolve(__dirname, '../app.frontend.web.module.home'),
    path.resolve(__dirname, '../app.frontend.web.module.login')
]

// 不用构建的子项目
var unbuildProjects = [
    path.resolve(__dirname, '../app.frontend.web.core'),
    path.resolve(__dirname, '../app.frontend.web.resource')
]
// 执行命令并打印输出结果
function execCommand(cmd) {
    exec(cmd, (err, stdout, stderr) => {
        console.log(chalk.green(stdout))
        console.log(chalk.yellow(stderr))
    })
}

// 在子项目中执行命令：除core和resource,因为这两个不需要
function subProjectCmd(cmd) {
    buildProjects.forEach(path => {
        execCommand('cd ' + path + cmd)
    })
}

function resourceProjectCmd(cmd) {
    unbuildProjects.forEach(path => {
        execCommand('cd ' + path + cmd)
    })
}

// yarn link项目，以适应开发模式
const LINK_COMMAND = ' && yarn link'
gulp.task('link', () => {
    subProjectCmd(LINK_COMMAND)
    resourceProjectCmd(LINK_COMMAND)

    execCommand('cd ' + PROJ_PATH)
    execCommand('yarn link @gfloan/app.frontend.web.components')
    execCommand('yarn link @gfloan/app.frontend.web.core')
    execCommand('yarn link @gfloan/app.frontend.web.resource')
    execCommand('yarn link @gfloan/app.frontend.web.store')
    execCommand('yarn link @gfloan/app.frontend.web.utils')
    execCommand('yarn link @gfloan/app.frontend.web.router')

    execCommand('cd ' + ROUTER_PATH)
    execCommand('yarn link @gfloan/app.frontend.web.common')
    execCommand('yarn link @gfloan/app.frontend.web.module.home')
    execCommand('yarn link @gfloan/app.frontend.web.module.login')
})



function devMode(name, cmd) {
    gulp.task(name, () => {
        subProjectCmd(cmd)
        execCommand('cd ' + PROJ_PATH + ' && yarn run dev')
    })
}

const WATCH_COMMAND = ' && yarn run watch'
// 开发模式,进入每一个文件夹监控文件变化，可能会导致机器卡,慎用
devMode('dev:watch', WATCH_COMMAND)

const BUILD_COMMAND = ' && yarn run build'
// 开发模式,先对每个子项目打包，然后启动根应用的dev命令
devMode('dev', BUILD_COMMAND)

// 发布所有的项目，并push到git仓库
var newVersion = argv['new-version']
var gitMessage = argv.m
const PUBLISH_COMMAND = 'yarn run doc' +
    ' && yarn run build && yarn publish --new-version ' + newVersion + 
    ' && git cmp ' + gitMessage
const PUBLISH_COMMAND_NO_BUILD = ' && yarn publish && git cmp'
gulp.task('publishAll', () => {
    subProjectCmd(PUBLISH_COMMAND)
    resourceProjectCmd(PUBLISH_COMMAND_NO_BUILD)
})

// 安装所有项目的依赖
const INSTALL_COMMAND = ' && yarn'
gulp.task('installAll', () => {
    subProjectCmd(INSTALL_COMMAND)
    resourceProjectCmd(INSTALL_COMMAND)
})