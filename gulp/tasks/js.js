import gulp from 'gulp';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import replace from 'gulp-replace';

export const js = () => {
    return gulp
        .src(app.path.src.js) // Путь к основному файлу
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(app.path.build.js)) // Сохранение минифицированного файла
        .on('end', () => {
            gulp
                .src(app.path.src.js) // Путь к основному файлу
                .pipe(replace(
                    /import\s*{?\s*([\w\s,]*)\s*}?\s*from\s*["']\.\/functions\/([\w-]+)\.js["'];/g,
                    (match, p1, p2) => {
                        return `import { ${p1} } from "./functions/${p2}.min.js";`;
                    }
                ))
                .pipe(
                    webpack({
                        mode: app.isBuild ? 'production' : 'development',
                        output: {
                            filename: 'main.min.js',
                        },
                    }),
                )
                .pipe(gulp.dest(app.path.build.js))
                .pipe(app.plugins.browsersync.stream());
        });
};
