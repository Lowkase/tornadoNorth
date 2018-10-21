// PACKAGES
// --------------------------------------------------------------------------------
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var gulp  = require('gulp');
var log = require('fancy-log');
var sass = require('gulp-sass');


// TASKS
// --------------------------------------------------------------------------------
// SASS
gulp.task('sass', function () {
  log('---- task sass');

  return gulp.src(['./assets/styles/**/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
    .pipe(gulp.dest('./assets/styles'))        
    .on('end', function() {
     });;
});

// SCRIPTS
gulp.task('scripts', function () {
    log('---- task scripts');
});

// HTML
gulp.task('html', function () {
    log('---- task html');
});


// WATCH
// --------------------------------------------------------------------------------
// GULP WATCH - With browser-sync
gulp.task('watch', ['sass'], function () {
    log('-- browser-sync init');
    log('-- watches init');

    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });

    // SASS / CSS
    gulp.watch("./assets/**/*.scss", ['sass']).on('change', browserSync.reload);

    // SCRIPTS
    gulp.watch("./assets/**/*.js", ['scripts']).on('change', browserSync.reload);

    // HTML
    gulp.watch("./*.html", ['html']).on('change', browserSync.reload);
    gulp.watch("./assets/**/*.html", ['html']).on('change', browserSync.reload);
});