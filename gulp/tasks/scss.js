import * as gulp from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sassCompiler = gulpSass(sass);

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error: <%= error.message %>',
				}),
			),
		)
		.pipe(
			sassCompiler({
				outputStyle: 'expanded',
				includePaths: ['node_modules'],
			}),
		)
		.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ['last 3 versions'],
					cascade: true,
				}),
			),
		)
		.pipe(app.plugins.if(app.isBuild, cleanCss()))
		.pipe(
			rename({
				suffix: app.isBuild ? '.min' : '',
				extname: '.css',
			}),
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
};
