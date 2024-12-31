import gulp from 'gulp';
import { path } from '../config/path.js'; // Импортируем пути

// Задача для копирования шрифтов
export const fonts = () => {
    return gulp.src(path.src.fonts) // Указываем путь к шрифтам в src
        .pipe(gulp.dest(path.build.fonts)); // Копируем в папку dist/fonts
};