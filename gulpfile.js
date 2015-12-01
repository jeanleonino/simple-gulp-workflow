var gulp    = require('gulp');
var sass    = require('gulp-sass');
var watch   = require('gulp-watch');
var jshint  = require('gulp-jshint');
var pumbler = require('gulp-plumber'); // gulp-pumbler is an error handler
var connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server({
    root: 'dist'
  });
});

gulp.task('default', ['webserver']);
