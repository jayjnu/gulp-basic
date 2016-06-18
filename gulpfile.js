const path = require('path');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const del = require('del');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const pug = require('gulp-pug');

/*기본적인 자동화 Task 관리
* 1. Sass watching과 compiling
* 2. ES6 compiling to javascript and compressing
* 3. pug compiling to html np
* */

const dir = {
	js:{src:path.join(__dirname, 'app/js/*.js'), dest:path.join(__dirname, 'build/js')},
	css:{src:path.join(__dirname, 'app/css/*.scss'), dest:path.join(__dirname, 'build/css')},
	pug:{src:path.join(__dirname, 'app/views'), dest:path.join(__dirname, 'build/')},
	build:path.join(__dirname, 'build/**/*')
};

gulp.task('browser-sync', function(){
	browserSync.init({
		server:'./build'
	});

	gulp.watch(dir.js.src,['javascript']);
	gulp.watch(dir.css.src,['scss']);
	gulp.watch(path.join(dir.pug.src,'*.pug'), ['pug']);

	browserSync.watch(dir.build).on('change', browserSync.reload);
});

gulp.task('javascript', function(){
	return gulp.src(dir.js.src)
			.pipe(babel({
				presets:['es2015']
			}))
			.pipe(uglify())
			.pipe(gulp.dest(dir.js.dest));
});

gulp.task('scss', function(){
	return gulp.src(dir.css.src)
			.pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
			.pipe(gulp.dest(dir.css.dest));
});

gulp.task('pug', function(){
	var src = dir.pug.src;
	var included = path.join(src, '*.pug'),
		excluded = "!" + path.join(src, '_*.pug');
	return gulp.src([included, excluded])
			.pipe(plumber())
			.pipe(pug({pretty:'\t'}))
			.pipe(plumber.stop())
			.pipe(gulp.dest(dir.pug.dest));
});

gulp.task('clean:build', function(){
	return del.sync('build/**/*');
});

gulp.task('default', ['clean:build', 'javascript', 'scss', 'pug', 'browser-sync'],function(){
});