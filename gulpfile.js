/**
 * Dependencies
 */
var gulp = require('gulp');
var serve = require('gulp-serve');
var fs = require('fs');
var del = require('del');
var exec = require('gulp-exec');
var concat = require('gulp-concat');

/**
 * Clean
 */
gulp.task('clean', function(cb) {
  del('out').then(function () {
    cb();
  });
});

/**
 * KSS
 */
gulp.task('kss', ['clean'], function(cb) {
  var options = {
    continueOnError: false,
    pipeStdout: true
  };
  var reportOptions = {
    err: true,
    stderr: true,
    stdout: true
  };
  return gulp.src('styleguide')
    .pipe(exec('kss --config=.kss-node.json', options))
    .pipe(exec.reporter(reportOptions));
});

/**
 * Sets up Bootstrap CSS for KSS.
 */
gulp.task('kss-uswds-css', ['kss', 'kss-uswds-fonts', 'kss-uswds-img'], function() {
  var sources = [
    'node_modules/uswds/dist/css/uswds.css',
    'styleguide/kss-fixes.css'
  ];
  return gulp.src(sources)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('out/kss-assets/'));
});

/**
 * Sets up USWDS Fonts for KSS.
 */
gulp.task('kss-uswds-fonts', ['kss'], function() {
  var sources = [
    'node_modules/uswds/dist/fonts/*'
  ];
  return gulp.src(sources)
    .pipe(gulp.dest('out/fonts/'));
});

/**
 * Sets up USWDS Images for KSS.
 */
gulp.task('kss-uswds-img', ['kss'], function() {
  var sources = [
    'node_modules/uswds/dist/img/*'
  ];
  return gulp.src(sources)
    .pipe(gulp.dest('out/img/'));
});

/**
 * Sets up Bootstrap JS for KSS.
 */
gulp.task('kss-uswds-js', ['kss'], function() {
  var sources = [
    'node_modules/uswds/dist/js/uswds.js',
  ];
  return gulp.src(sources)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('out/'));
});

/**
 * HTML Hint
 */
gulp.task('htmlhint', ['kss-uswds'], function () {
  var htmlhint = require('gulp-htmlhint');
  return gulp.src(['./out/*.html5'])
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter())
});

/**
 * Deploy
 */
gulp.task('deploy', ['kss-uswds'], function () {
  var deploy = require('gulp-gh-pages');
  return gulp.src('./out/**/*')
    .pipe(deploy());
});

/**
 * Serve
 */
gulp.task('serve', ['kss-uswds'], serve({
  root: ['out'],
  port: 8000
}));

/**
 * Watch
 */
gulp.task('watch', ['kss-uswds'], function() {
  gulp.watch(['styleguide/**'], ['kss-uswds']);
});

/**
 * Set up the assets.
 */
gulp.task('kss-uswds', ['kss-uswds-css', 'kss-uswds-js']);

/**
 * Default tasks
 */
gulp.task('start', ['clean', 'kss-uswds', 'serve', 'watch']);
gulp.task('test', ['kss-uswds', 'htmlhint']);
gulp.task('default', ['test']);
