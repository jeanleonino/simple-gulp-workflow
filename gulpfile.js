'use strict';

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var clean   = require('gulp-clean');
var watch   = require('gulp-watch');
var jshint  = require('gulp-jshint');
var pumbler = require('gulp-plumber'); // gulp-pumbler is an error handler
var connect = require('gulp-connect');

var bases = {
  app: 'source/',
  dist: 'public/'
};

var paths = {
  sass: 'scss/',
  css: 'css/'
};

// the local server serves source/, and not pulic/ for developers' sake
gulp.task('webserver', function() {
  connect.server({
    root: 'source/'
  });
});

gulp.task('sass', function(){
  gulp.src(bases.app + paths.sass + 'style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(bases.app + paths.css));
});

// Deletes the folder public/
gulp.task('clean', function(){
  return gulp.src(bases.dist)
  .pipe(clean());
});

gulp.task('dist', ['clean']); // TODO: minify, copy
gulp.task('default', ['webserver']);
