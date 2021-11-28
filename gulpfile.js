import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import bs from 'browser-sync';
import del from 'del';

const {
  src, dest, series, watch,
} = gulp;
const sass = gulpSass(dartSass);
const browserSync = bs.create();

const clean = () => del(['src/css/main.css']);

const buildStyles = () => src('src/scss/main.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(dest('src/css'))
  .pipe(browserSync.stream());

const build = series(clean, buildStyles);

const runServer = () => {
  browserSync.init({
    server: "src/",
    open: false,
  });

  watch('src/scss/**/*.scss', buildStyles);
  watch('src/*.html', browserSync.reload);
};

export const develop = series(build, runServer);
export default build;
