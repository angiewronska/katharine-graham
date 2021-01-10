const { watch, src, dest, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const scss = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-minify');
const del = require('del');
const fileinclude = require('gulp-file-include');
const replace = require('gulp-replace');

const config = {
  app: {
    js: './app/js/*.js',
    scss: './app/scss/*.scss',
    css: './app/css/*.css',
    images: './app/img/*.*',
    html: './app/*.html',
    parts: './app/parts/*.html'
  },
  extra: {
    css: './app/css'
  },
  dist: {
    base: './dist',
    images: './dist/img',
    css: './dist/css',
    js: './dist/js'
  }
}

function liveReload(done) {
  browserSync.init({
    server: {
      baseDir: config.dist.base
    },
  });
  done();
}
function reload(done) {
  browserSync.reload();
  done();
}
function htmlTask(done) {
  src(config.app.html)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest(config.dist.base))
  done();
}

function scssTask(done) {
  src(config.app.scss)
    .pipe(scss().on('error', scss.logError))
    .pipe(dest(config.extra.css))
  done();
};

function jsTask(done) {
  src(config.app.js)
    .pipe(dest(config.dist.js))
  done();
}

function imagesTask(done) {
  src(config.app.images)
    .pipe(changed(config.dist.base))
    .pipe(imagemin())
    .pipe(dest(config.dist.images))
  done();
}
function watchFiles(done) {
  watch(config.app.html, series(htmlTask, reload));
  watch(config.app.parts, series(htmlTask, reload));
  watch(config.app.scss, series(scssTask, reload));
  watch(config.app.js, series(jsPathTask, reload));
  watch(config.app.css, series(cssTask, reload));
  watch(config.app.images, series(imagesTask, reload));
  done();
}

function cleanUp() {
  return del([config.dist.base]);
}


function htmlPathTask(done) {
  src(config.app.html)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest(config.dist.base))

  done();
}

function cssTask(done) {
  src(config.app.css)
    .pipe(concat('main.min.css'))
    .pipe(cleanCSS())
    .pipe(dest(config.dist.css))
  done();
}

function cssPathTask(done) {
  src(config.app.css)
    .pipe(concat('main.min.css'))
    .pipe(cleanCSS())
    .pipe(dest(config.dist.css))
  done();
}

function jsPathTask(done) {
  src(config.app.js)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(dest(config.dist.js))
  done();
}

exports.default = parallel(htmlTask, scssTask, imagesTask, cssTask, jsPathTask, watchFiles, liveReload);
exports.prod = parallel(jsTask, scssTask, imagesTask, htmlPathTask, cssPathTask, jsPathTask);
