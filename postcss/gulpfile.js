var gulp = require('gulp');

gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    var processors = [
        require('autoprefixer'),
        require('precss'),
    ];

    return gulp.src('src/**/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.css', ['css']);
});
