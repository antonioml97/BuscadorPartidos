var gulp = require('gulp');
var mocha = require('gulp-mocha');
var install = require('gulp-install');


//Tarea para testear el proyecto.
gulp.task('test', async function(){
  gulp.src('test')
  .pipe(mocha());
});

//Tarea para instalar las dependencias
gulp.task('install', async function(){
  gulp.src(['./package.json','./package-lock.json'])
    .pipe(install());
});

gulp.task('default', gulp.series('test'));