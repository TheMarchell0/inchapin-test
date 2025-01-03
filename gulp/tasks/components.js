import gulp from 'gulp';
import { path } from '../config/path.js';

export const components = (done) => {
    gulp.src(path.src.components)
        .pipe(app.plugins.browsersync.stream());
    done();
};