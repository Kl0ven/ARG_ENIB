'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const minify = require('gulp-minify');

// Constants
const scriptsToBundle = ['./src/confetti.js'];

// JS building
gulp.task('build', () => {
  return gulp.src(scriptsToBundle)
    .pipe(concat('index.js'))
    .pipe(minify({
      ext:{
        src:'.js',
        min:'.min.js'
      }
    }))
    .pipe(gulp.dest('./dist'))
});

///////

gulp.task('watchJob', () => {
  return gulp.watch(scriptsToBundle, gulp.series('build'));
});

//
gulp.task('watch', gulp.series('watchJob'));
gulp.task('default', gulp.series('build'));