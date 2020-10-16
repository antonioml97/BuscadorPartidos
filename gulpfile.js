var gulp = require('gulp');
var mocha = require('gulp-mocha');


//Tarea para testear el proyecto.
gulp.task('test', async function(){
  gulp.src('test')
  .pipe(mocha());
});

gulp.task('default', gulp.series('test'));