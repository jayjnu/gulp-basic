const path = require('path');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const del = require('del');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const pug = require('gulp-pug');
const concat = require('gulp-concat');

/*기본적인 자동화 Task 관리
* 1. Sass watching과 compiling
* 2. ES6 compiling to javascript and compressing
* 3. pug compiling to html
* */

const dir = {
	js:{
		rel:'app/js/**/*.js',
		src:[path.join(__dirname, 'app/js/jquery/*.js'), path.join(__dirname, 'app/js/listen/*js'), path.join(__dirname, 'app/js/*.js')], // 라이브러리 추가 시 수정 필요
		dest:path.join(__dirname, 'build/js')
	},
	css:{
		rel:'app/css/**/*.scss',
		src:path.join(__dirname, 'app/css/**/*.scss'),
		dest:path.join(__dirname, 'build/css')
	},
	pug:{
		rel:'app/views/**/*.pug',
		src:path.join(__dirname, 'app/views/**/*.pug'),
		dest:path.join(__dirname, 'build/')
	},
	build:path.join(__dirname, 'build/**/*')
};

gulp.task('browser-sync', function(){
	browserSync.init({
		server:'./build'
	});

	gulp.watch(dir.js.rel,['javascript']);
	gulp.watch(dir.css.rel,['scss']);
	gulp.watch(dir.pug.rel,['pug']);

	browserSync.watch(dir.build).on('all', browserSync.reload);
});

gulp.task('javascript', function(){
	var src = dir.js.src;
	//var extension = "!" + src.replace('*.js', '_*.js');
	//var module = "!" + src.replace('*.js', '*.min.js');

	return gulp.src(src)
			.pipe(plumber())
			.pipe(babel({
				presets:['es2015']
			}))
			.pipe(plumber.stop())
			//.pipe(uglify())
			.pipe(plumber.stop())
			.pipe(concat('main.js'))
			.pipe(gulp.dest(dir.js.dest));
});

gulp.task('scss', function(){
	var src = dir.css.src;
	var extension = "!" + src.replace('*.scss', '_*.scss');
	var module = "!" + src.replace('*.scss', '*.min.scss');

	return gulp.src([src, extension, module])
			.pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
			.pipe(gulp.dest(dir.css.dest));
});

gulp.task('pug', function(){
	var src = dir.pug.src;
	var excluded = "!" + src.replace('*.pug', '_*.pug');
	return gulp.src([src, excluded])
			.pipe(plumber())
			.pipe(pug({pretty:'\t'}))
			.pipe(plumber.stop())
			.pipe(gulp.dest(dir.pug.dest));
});

gulp.task('clean:build', function(){
	return del.sync(['build/**/*', '!build/images', '!build/images/**/*']);
});

gulp.task('default', ['clean:build', 'javascript', 'scss', 'pug', 'browser-sync'],function(){
});