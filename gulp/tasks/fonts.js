import gulp from 'gulp';
import { app } from '../gulpfile.js';

export const fonts = () => {
    return gulp.src(app.path.src.fonts)
        .pipe(gulp.dest(app.path.build.fonts));
};

export default fonts;