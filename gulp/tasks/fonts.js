import gulp from 'gulp';
import { app } from '../gulpfile.js'; // Импортируем app из gulpfile.js

// Задача для копирования шрифтов
export const fonts = () => {
    return gulp.src(app.path.src.fonts) // Путь к папке с шрифтами в src
        .pipe(gulp.dest(app.path.build.fonts)); // Путь, куда будут скопированы шрифты в dist
};

// Экспортируйте задачу, чтобы ее можно было использовать в других задачах
export default fonts;