import gulp from 'gulp';
import { path } from '../config/path.js';

export const videos = () => {
    return gulp.src(path.src.videos)
        .pipe(gulp.dest(path.build.videos));
};