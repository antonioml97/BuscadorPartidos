var gulp = require('gulp');
var mocha = require('gulp-mocha');
var run= require('gulp-run');


//Tarea para testear el proyecto.
gulp.task('test', async function(){
  gulp.src('test')
  .pipe(mocha());
});

gulp.task('default', gulp.series('test'));