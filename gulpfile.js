var emojiJson = require('./data/sample-emoji-v13.json'); //with path
var gulp = require('gulp');
var mustache = require('gulp-mustache');
var rename = require("gulp-rename");

gulp.task('default', function () {
    gulp.watch('templates/index.html', gulp.series('mustache-index'));
    gulp.watch('templates/single.html', gulp.series('mustache-single'));
});

gulp.task('mustache-index', async function () {
    gulp.src('templates/index.html')
        .pipe(mustache('data/emoji-v13-categories.json'))
        .pipe(gulp.dest('./'));
});

gulp.task('mustache-single', async function () {
    //for each emoji in the array
    emojiJson.emojis.forEach(createPage);

    //create a file for each item
    function createPage(item) {
        var currentEmoji = item;
        var fileName = currentEmoji.description.replace(/\s+/g, "-").toLowerCase();
        gulp.src('templates/single.html')
            .pipe(mustache(currentEmoji), {}, {})
            .pipe(rename(function (path) {
                // Updates the object in-place
                path.dirname += "/emoji";
                path.basename = fileName;
                path.extname = ".html";
            }))
            .pipe(gulp.dest('./'));
    }
});

