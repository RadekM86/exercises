var gulp = require('gulp');
var browsersync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')

gulp.task('browsersync', function() {
  var files = [
    '*.html',
    'css/*.css'
  ];
    browsersync.init(files, {
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded',  errLogToConsole: true}).on('error', sass.logError))
  .pipe(sourcemaps.write('.maps'))
  .pipe(gulp.dest('css'))
});
gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch', 'browsersync'],function(){

})
