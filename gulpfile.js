let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    watch = require('gulp-watch'),
    sourcmap = require('gulp-sourcemaps');

gulp.task('ws', async () => {
    const prefix = await import('gulp-autoprefixer').then(module => module.default);

    return gulp.src('./src/scss/*.scss')
        .pipe(sourcmap.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(prefix('last 2 version'))
        .pipe(sourcmap.write())
        .pipe(gulp.dest('dist/css'))
})

gulp.task("watch", () => {
    return watch(['src/scss/*.scss', 'src/scss/**/*.scss'], gulp.series('ws'));
});