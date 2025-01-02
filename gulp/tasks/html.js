import fileInclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
// eslint-disable-next-line no-unused-vars

/* global app */
// eslint-disable-next-line arrow-body-style
export const html = () => {
    return (
        app.gulp
            .src(app.path.src.html)
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: 'HTML',
                        message: 'Error: <%= error.message %>',
                    }),
                ),
            )
            .pipe(fileInclude())
            .pipe(app.plugins.replace(/<link rel="stylesheet" href="styles/g, '<link rel="stylesheet" href="css'))
            .pipe(app.plugins.replace(/(\.js)/g, '.min.js'))
            .pipe(app.plugins.replace(/(\.css)/g, '.min.css'))
            .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    versionNumber({
                        value: '%DT%',
                        append: {
                            key: '_v',
                            cover: 0,
                            to: ['css', 'js'],
                        },
                        output: {
                            file: 'gulp/version.json',
                        },
                    }),
                ),
            )
            .pipe(app.gulp.dest(app.path.build.html))
            .pipe(app.plugins.browsersync.stream())
    );
};

