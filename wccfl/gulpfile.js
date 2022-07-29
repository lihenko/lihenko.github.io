import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';
import clean from 'gulp-clean';
import wait from 'gulp-wait';

function sassbuild() { 
	return gulp
		.src('www/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false
        }))
		.pipe(gulp.dest('www/css'))
};

function imgclear(){
  return gulp
    .src('images/*')
    .pipe(clean()); 
};


function images() {
  return gulp
    .src('images/*')
    .pipe(wait(1500))
    .pipe(imagemin())
    .pipe(gulp.dest('www/img'))
};



function reload(done) {
	browserSync.reload();
	done();
};

function watch() {
    const watcher = gulp.watch('src/styles/**/*.scss');
    watcher.on('change', images );
}


function watchFiles() { 
	gulp.watch('www/scss/*.scss', gulp.series(sassbuild, reload));
	gulp.watch('images/*', gulp.series(images, reload, imgclear));
	gulp.watch('www/*.html', reload);
  gulp.watch('www/js/*.js', reload);
};

function server() { 
    browserSync({
		server: {
			baseDir: 'www'
		},
		notify: false,
	});
};

 

gulp.task('default', gulp.parallel(server, watchFiles));



