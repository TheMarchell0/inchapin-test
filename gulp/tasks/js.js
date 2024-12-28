import gulp from 'gulp';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify'; // Импортируем gulp-uglify
import rename from 'gulp-rename'; // Импортируем gulp-rename
import replace from 'gulp-replace'; // Импортируем gulp-replace

/* global app */
// eslint-disable-next-line arrow-body-style
export const js = () => {
    // Сначала минимизируем функции
    return gulp
        .src(app.path.src.functions) // Путь к исходным функциям
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' })) // Добавляем .min к имени каждого файла
        .pipe(gulp.dest(app.path.build.functions)) // Сохраняем в выходную папку
        .on('end', () => {
            // Затем копируем и изменяем основной файл
            gulp
                .src(app.path.src.js) // Путь к основному файлу
                .pipe(replace(
                    /import\s*{?\s*([\w\s,]*)\s*}?\s*from\s*["']\.\/functions\/([\w-]+)\.js["'];/g,
                    (match, p1, p2) => {
                        // p1 - имена функций, p2 - имя файла
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
                .pipe(gulp.dest(app.path.build.js)) // Сохраняем в выходную папку
                .pipe(app.plugins.browsersync.stream());
        });
};
