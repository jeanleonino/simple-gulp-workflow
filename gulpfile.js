var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var pumbler = require('gulp-plumber'); // gulp-pumbler is an error handler

var paths = {
  source: [],
  dist: [],
  distmin: 'dist/min/',
  sass_folder: 'source/scss/'
}

// This task processes all sass files inside source/scss/ and compile to source/css/
gulp.task('styles', function(){
  gulp.src(sass_folder) // add pumbler
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(dist))
});

gulp.task('default', ['dist']);
