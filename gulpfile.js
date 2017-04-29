// Include gulp
var gulp = require('gulp');

// Include other required plugins
var sass 		= require('gulp-sass'),
	sourcemaps  = require('gulp-sourcemaps');


// sass compiler for general main.css
gulp.task('sass', function () {
  return gulp.src([
  		'./src/sass/main.scss',
    ])
	.pipe(sourcemaps.init())
    .pipe(sass({
    	outputStyle: 'expanded',
    }))
    .on('error', sass.logError)
	.pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css'))
 });


// Watch Files For Changes and run
gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});
