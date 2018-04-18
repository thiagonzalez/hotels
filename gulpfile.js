// Require Gulp and plugins
var gulp  = require('gulp'),
    include = require('gulp-include'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    bourbon = require("bourbon").includePaths,
    neat = require("bourbon-neat").includePaths,
    slider = require("nouislider").includePaths,
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css');


// Scripts task
gulp.task('scripts', function() {
  return gulp.src('src/js/main.js')
    .pipe(include()).on('error', console.log)
    .pipe(gulp.dest('assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
});

// Styles task
gulp.task('styles', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({
        includePaths: [bourbon, neat]
    }))
    .pipe(autoprefixer(
        {browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1']
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css'))
});

// Watch task
gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/scss/**/*.scss', ['styles']);
});

// Default task
gulp.task('default', ['scripts', 'styles', 'watch']);
