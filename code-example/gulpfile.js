'use strict';

const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const sync = require('browser-sync');
const { RESOLUTIONS, BROWSER_SYNC } = require('./gulp.settings');

const browserSync = [];
RESOLUTIONS.forEach(() => browserSync.push(sync.create()));

const paths = {
  scss: { src: [], watch: [] },
  js: { src: [], watch: [] },
  html: { watch: [] },
};

RESOLUTIONS.forEach((element) => {
  paths.scss.src.push(`./${element}/assets/scss/style.scss`);
  paths.scss.watch.push(`./${element}/assets/scss/*.scss`);
  paths.js.src.push(`./${element}/assets/js/!(*.min)*.js`);
  paths.js.watch.push(`./${element}/assets/js/!(*.min)*.js`);
  paths.html.watch.push(`./${element}/*.html`);
});

function buildCSS() {
  return gulp
    .src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(
      rename({
        extname: '.min.css',
      }),
    )
    .pipe(
      sourcemaps.write('maps', {
        sourceMappingURLPrefix: 'assets',
      }),
    )
    .pipe(gulp.dest((file) => path.join(file.path, '/../../..')));
}

function buildJS() {
  return gulp
    .src(paths.js.src)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
        comments: false,
        retainLines: false,
      }),
    )
    .pipe(terser())
    .pipe(
      rename({
        extname: '.min.js',
      }),
    )
    .pipe(sourcemaps.write('maps', { sourceMappingURLPrefix: 'assets' }))
    .pipe(gulp.dest((file) => path.join(file.path, '/../../..')));
}

function initBrowserSync(n) {
  if (n === RESOLUTIONS.length) return RESOLUTIONS.length - 1;
  return browserSync[parseInt(n, 10)].init(
    { server: `./${RESOLUTIONS[parseInt(n, 10)]}` },
    () => initBrowserSync(n + 1),
  );
}

function watch() {
  if (BROWSER_SYNC) {
    initBrowserSync(0);

    RESOLUTIONS.forEach((_, i) => {
      gulp
        .watch(paths.scss.watch[parseInt(i, 10)], buildCSS)
        .on('change', browserSync[parseInt(i, 10)].reload);
      gulp
        .watch(paths.js.watch[parseInt(i, 10)], buildJS)
        .on('change', browserSync[parseInt(i, 10)].reload);
      gulp
        .watch(paths.html.watch[parseInt(i, 10)])
        .on('change', browserSync[parseInt(i, 10)].reload);
    });
  } else {
    RESOLUTIONS.forEach((_, i) => {
      gulp.watch(paths.scss.watch[parseInt(i, 10)], buildCSS);
      gulp.watch(paths.js.watch[parseInt(i, 10)], buildJS);
    });
  }
}

exports.buildCSS = buildCSS;
exports.buildJS = buildJS;
exports.watch = watch;

exports.default = gulp.series(buildCSS, buildJS, watch);
