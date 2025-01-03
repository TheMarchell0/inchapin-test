import gulp from 'gulp';
import { path } from '../config/path.js';

export const fonts = () => {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
};