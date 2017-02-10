const gulp = require('gulp');
const webserver = require('gulp-webserver');
const del = require('del');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

gulp.task('clean:build', function() {
    del('./web/js/*')
});

gulp.task('build', ['clean:build'], function() {
    gulp.src('./index.web.js')
        .pipe(webpack(webpackConfig))
        .on('error', function handleError() {
            this.emit('end'); // Recover from errors
        })
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch(['./app/**/*', './web/css/**/*', './index.web.js'], ['build']);
});

gulp.task('serve', ['watch'], function() {
    gulp.src('web')
        .pipe(webserver({
            fallback: 'index.html',
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('default', ['serve']);
