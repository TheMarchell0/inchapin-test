import gulp from 'gulp';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';

const jsProcess = () => {
    return gulp
        .src(['src/js/**/*.js', '!src/js/**/_*.js'])
        .pipe(plumber())
        .pipe(app.isBuild ? uglify() : gulp.dest(app.path.build.js))
        .pipe(rename({ suffix: app.isBuild ? '.min' : '' }))
        .pipe(gulp.dest(app.path.build.js));
};

const jsBundle = () => {
    return gulp
        .src(['src/js/**/*.js', '!src/js/**/_*.js'])
        .pipe(plumber())
        .pipe(
            webpack({
                mode: app.isBuild ? 'production' : 'development',
                output: {
                    filename: app.isBuild ? 'main.min.js' : 'main.js',
                },
            }),
        )
        .pipe(gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
};

export const js = gulp.series(jsProcess, jsBundle);
