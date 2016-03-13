// define objects, load the 2 modules
var gulp = require('gulp'),
	uglify = require('gulp-uglify');

// minify task for src js/app.js file --> uglify -> build dir
gulp.task('minify', function() {
	gulp.src('js/app.js').pipe(uglify()).pipe(gulp.dest('build'));
});