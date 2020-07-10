const { src, dest, parallel, series, watch} = require('gulp')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const webpackStream = require('webpack-stream')
const browserSync = require('browser-sync').create()
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')


const autoprefixer = require('autoprefixer')
const sass = require('gulp-sass')
var uglifycss = require('gulp-uglifycss')
function styles(done) {
    src('src/sass/main.sass')
    .pipe(sourcemaps.init())

    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      })) 
    .pipe(sourcemaps.write('.'))

    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
    done();
}
function scripts(done) {
    src('src/js/**')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream())
        done()   
}
function serve(done) {
    browserSync.init({
        server: './'
    }, done)
}
function reload(done) {
    browserSync.reload()
    done()
}
function watchTask(done) {
    serve()
    watch('src/js/**', series(scripts))
    watch('src/sass/**', series(styles))
    watch('index.html', reload)
    done()
}
exports.watch = watchTask

exports.styles = styles
exports.scripts = scripts
exports.serve = serve
exports.default = watchTask
