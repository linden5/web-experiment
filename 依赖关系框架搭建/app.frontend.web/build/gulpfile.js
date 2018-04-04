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
// yarn link项目，以适应开发模式
const LINK_COMMAND = ' && yarn link'
gulp.task('link', () => {
    execCommand('cd ' + COMMON_PATH + LINK_COMMAND)
    execCommand('cd ' + COMPONENTS_PATH + LINK_COMMAND)
    execCommand('cd ' + CORE_PATH + LINK_COMMAND)
    execCommand('cd ' + MODULE_HOME_PATH + LINK_COMMAND)
    execCommand('cd ' + RESOURCE_PATH + LINK_COMMAND)
    execCommand('cd ' + ROUTER_PATH + LINK_COMMAND)
    execCommand('cd ' + STORE_PATH + LINK_COMMAND)
    execCommand('cd ' + UTILS_PATH + LINK_COMMAND)

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


const WATCH_COMMAND = ' && yarn run watch'
// 开发模式
gulp.task('dev', () => {
    execCommand('cd ' + COMMON_PATH + WATCH_COMMAND)
    execCommand('cd ' + COMPONENTS_PATH + WATCH_COMMAND)
    execCommand('cd ' + MODULE_HOME_PATH + WATCH_COMMAND)
    execCommand('cd ' + ROUTER_PATH + WATCH_COMMAND)
    execCommand('cd ' + STORE_PATH + WATCH_COMMAND)
    execCommand('cd ' + UTILS_PATH + WATCH_COMMAND)
    execCommand('cd ' + PROJ_PATH + ' && yarn run dev')
})