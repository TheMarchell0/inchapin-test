import gulp from 'gulp'; // Основной модуль
import { path } from './gulp/config/path.js'; // Импорт путей
import { plugins } from './gulp/config/plugins.js'; // Импорт общих плагинов

// Передаем значения в глобальную переменную и добавляем комментарий для eslint:
/* global global process*/
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
};

// Импорт задач
import { html } from './gulp/tasks/html.js';
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

// Основные задачи
const mainTasks = gulp.series(gulp.parallel(html, scss, js, images));

// Построение сценариев выполнения задач
const build = gulp.series(reset, mainTasks);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Экспорт сценариев для добавления в скрипт в package.json
export { dev };
export { build };
// Вызов сценария командой npm run dev или npm run build

// Выполнение сценария по умолчанию
gulp.task('default', dev);
