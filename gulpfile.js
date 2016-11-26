var concat = require('gulp-concat'),
    del = require('del'),
    gulp = require('gulp'),
    karma = require('karma'),
    run = require('run-sequence');

gulp.task('build', function(done) {
  return run(
    'clean',
    [
      'script',
      'vendor'
    ],
    done
  );
});

gulp.task('clean', function(done) {
  return del(['build'], done);
});

gulp.task('default', function(done) {
  return run(
    'build',
    'watch',
    done
  );
});

gulp.task('script', function() {
  var scripts = [
    'src/app.js',
    'src/**/*.js',
    '!src/**/*.spec.js'
  ];

  return gulp
    .src(scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/javascript'));
});

gulp.task('test', function(done) {
  var options = {configFile: __dirname + '/karma.conf.js'};

  function onExit() {
    done();
  }

  new karma.Server(options, onExit).start();
});

gulp.task('vendor', function() {
  var scripts = [
    'node_modules/angular/angular.js',
    'node_modules/angular-foundation/mm-foundation-tpls.js',
    'node_modules/angular-ui-router/release/angular-ui-router.js'
  ];

  return gulp
    .src(scripts)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('build/javascript'));
});

gulp.task('watch', function() {
  var scripts = 'src/**/*.js',
      src = 'build/javascript/*.js';

  gulp.watch(scripts, ['script']);
  gulp.watch(src, ['test']);

  return gulp;
});
