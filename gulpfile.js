const gulp = require('gulp');
const server = require('gulp-webserver');
const minicss = require('gulp-clean-css');

gulp.task('myserver',()=>{
    gulp.src('./src')
    .pipe(server({
        host:'localhost',
        port:8000,
        livereload:true,
        open:true,
    }))
})

gulp.task('mini',()=>{
    gulp.src('./src/css/*.css')
    .pipe(minicss())
    .pipe(gulp.dest('./src/build'))
})
