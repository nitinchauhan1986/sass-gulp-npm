var gulp = require ('gulp');
var sass = require ('gulp-sass');

gulp.task('compile',function(){
    return gulp.src("sass/*.scss")
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest("css"))
})

gulp.task('default',function(){
    console.log('default.....');
    gulp.watch("sass/*.scss",["compile"]);
})