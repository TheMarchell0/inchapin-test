import fileInclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import htmlmin from 'gulp-htmlmin';

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
            .pipe(app.plugins.replace(/(\.js)/g, app.isBuild ? '.min.js' : '.js')) // Заменяем на .min.js только при сборке
            .pipe(app.plugins.replace(/(\.css)/g, app.isBuild ? '.min.css' : '.css')) // Заменяем на .min.css только при сборке
            .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg())) // Выполняем webpHtmlNosvg только при сборке
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
            .pipe(app.plugins.if(app.isBuild, htmlmin({ collapseWhitespace: true }))) // Минификация HTML только при сборке
            .pipe(app.gulp.dest(app.path.build.html))
            .pipe(app.plugins.browsersync.stream())
    );
};
