var gulp = require('gulp');
var browsersync = require("browser-sync").create();

// startup server
gulp.task('build-server', function (done) {
  browsersync.init({
      server: {
          baseDir: "./public"
      }
  });
  done();
  console.log('Server was launched');
});

// browser reload 
gulp.task('browser-reload', function (done){
  browsersync.reload();
  done();
  console.log('Browser reload completed');
});

// watch files
gulp.task('watch-files', function(done) {
  gulp.watch("public/*/*.html", gulp.task('browser-reload'));
  gulp.watch("public/*/*.css", gulp.task('browser-reload'));
  gulp.watch("public/*/*.js", gulp.task('browser-reload'));
  done();
  console.log(('gulp watch started'));
});

// task
gulp.task('default', gulp.series('build-server', 'watch-files', function(done){
  done();
  console.log('Default all task done!');
}));
