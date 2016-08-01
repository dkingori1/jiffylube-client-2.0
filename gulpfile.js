var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('index', function () {
  var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./bower_components/**/*.js', './bower_components/**/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
});