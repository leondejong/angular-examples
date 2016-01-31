var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', function () {
  gulp.src(['src/**/button-module.js', 'src/**/*.js', '!src/**/*spec.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.js', ['default']);
});