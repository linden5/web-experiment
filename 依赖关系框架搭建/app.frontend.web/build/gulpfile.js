const exec = require('child_process').exec
const path = require('path')
const gulp = require('gulp')
const minimist = require('minimist')
const chalk = require('chalk')
const TEMPLATE_PATH = path.resolve(__dirname, '../app.frontend.web.scaffold')

var argv = minimist(process.argv.slice(3))
var destPath = argv.d

// 从脚手架项目生成模板项目
gulp.task('generate', () =>{
    gulp.src([TEMPLATE_PATH + '/**/*', '!' + TEMPLATE_PATH + '/node_modules/**'])
        .pipe(gulp.dest(destPath))
})

// 项目文件夹定义
const PROJ_PATH = path.resolve(__dirname, '../')

const COMPONENTS_PATH = path.resolve(__dirname, '../app.frontend.web.components')
const CORE_PATH = path.resolve(__dirname, '../app.frontend.web.core')
const RESOURCE_PATH = path.resolve(__dirname, '../app.frontend.web.resource')
const STORE_PATH = path.resolve(__dirname, '../app.frontend.web.store')
const UTILS_PATH = path.resolve(__dirname, '../app.frontend.web.utils')
const ROUTER_PATH = path.resolve(__dirname, '../app.frontend.web.router')
const COMMON_PATH = path.resolve(__dirname, '../app.frontend.web.common')
const MODULE_HOME_PATH = path.resolve(__dirname, '../app.frontend.web.module.home')

function execCommand(cmd) {
    exec(cmd, (err, stdout, stderr) => {
        console.log(chalk.green(stdout))
        console.log(chalk.yellow(stderr))
    })
}

// 在子项目中执行命令：除core和resource,因为这两个不需要
function subProjectCmd(cmd) {
    execCommand('cd ' + COMMON_PATH + cmd)
    execCommand('cd ' + COMPONENTS_PATH + cmd)
    execCommand('cd ' + MODULE_HOME_PATH + cmd)
    execCommand('cd ' + ROUTER_PATH + cmd)
    execCommand('cd ' + STORE_PATH + cmd)
    execCommand('cd ' + UTILS_PATH + cmd)
}

function resourceProjectCmd(cmd) {
    execCommand('cd ' + CORE_PATH + cmd)
    execCommand('cd ' + RESOURCE_PATH + cmd)
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
// 开发模式,先对每个子项目打包，然后
devMode('dev', BUILD_COMMAND)

const PUBLISH_COMMAND = ' && yarn run build && yarn publish && git cmp'
const PUBLISH_COMMAND_NO_BUILD = ' && yarn publish && git cmp'
gulp.task('publishAll', () => {
    subProjectCmd(PUBLISH_COMMAND)
    resourceProjectCmd(PUBLISH_COMMAND_NO_BUILD)
})

const INSTALL_COMMAND = ' && yarn'
gulp.task('installAll', () => {
    subProjectCmd(INSTALL_COMMAND)
    resourceProjectCmd(INSTALL_COMMAND)
})