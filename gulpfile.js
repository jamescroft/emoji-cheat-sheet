
var gulp = require('gulp');
var mustache = require('gulp-mustache');

gulp.task('mustache', async function() {
    gulp.src('templates/*')
        .pipe(mustache('data/emoji-v13-categories.json'))
        .pipe(gulp.dest('./'));
});