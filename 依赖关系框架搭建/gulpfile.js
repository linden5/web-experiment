const gulp = require('gulp')
const minimist = require('minimist')
const TEMPLATE_PATH = '../私有npm库配置/app.frontend.web.scaffold'

var argv = minimist(process.argv.slice(3))
var path = argv.d


gulp.task('generate', () =>{
    gulp.src([TEMPLATE_PATH + '/**/*', '!' + TEMPLATE_PATH + '/node_modules/**'])
        .pipe(gulp.dest(path))
})