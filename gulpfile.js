import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
};

// Импортируйте ваши задачи
import { html } from './gulp/tasks/html.js';
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { components } from './gulp/tasks/components.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';

// Функция для отслеживания изменений
function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.fonts, fonts);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.components, scss);
    gulp.watch(path.watch.components, js);
}

// Основные задачи
const mainTasks = gulp.series(gulp.parallel(html, scss, js, images, fonts, components));

const build = gulp.series(reset, mainTasks);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

export { dev };
export { build };

gulp.task('default', dev);
