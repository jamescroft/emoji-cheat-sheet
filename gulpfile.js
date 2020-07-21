
var gulp = require('gulp');
var mustache = require('gulp-mustache');

gulp.task('default', function() {
    return gulp.watch('templates/index.html', gulp.series('mustache'));
});

gulp.task('mustache', async function() {
    gulp.src('templates/*')
        .pipe(mustache('data/emoji-v13-categories.json'))
        .pipe(gulp.dest('./'));
});