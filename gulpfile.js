// NOTE: gulp-responsive-images requires ImageMagick to be installed.
// See https://github.com/dcgauld/gulp-responsive-images for details.

'use strict';

var gulp = require('gulp'),
    responsive = require('gulp-responsive-images'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint'),
    watch = require('gulp-watch'),
    newer = require('gulp-newer');

// set up paths for later
var paths = {
    img: {
        source: '_source/images/',
        output: 'images/',
    },
    js: {
        src: [
            'js/page-info.js',
            'js/google-analytics.js',
        ],
        dest: 'js/'
    }
};

// Take the print images and optimise and resize them
gulp.task('images:optimise', function () {
    gulp.src(paths.img.source + '*')
        .pipe(newer(paths.img.output))
        .pipe(responsive({
        '*': [{
            width: 810,
            quality: 90,
            upscale: false,
        }]
    }))
    .pipe(gulp.dest(paths.img.output));
});

// Make small size images for use in srcset in _includes/figure
gulp.task('images:small', function () {
    gulp.src(paths.img.source + '*')
        .pipe(newer(paths.img.output))
        .pipe(responsive({
            '*': [{
                width: 320,
                quality: 90,
                upscale: false,
                suffix: '-320',
            }]
        }))
        .pipe(gulp.dest(paths.img.output));
});

// Make medium size images for use in srcset in _includes/figure
gulp.task('images:medium', function () {
    gulp.src(paths.img.source + '*')
        .pipe(newer(paths.img.output))
        .pipe(responsive({
            '*': [{
                width: 640,
                quality: 80,
                upscale: false,
                suffix: '-640',
            }]
        }))
        .pipe(gulp.dest(paths.img.output));
});

// Make large size images for use in srcset in _includes/figure
gulp.task('images:large', function () {
    gulp.src(paths.img.source + '*')
        .pipe(newer(paths.img.output))
        .pipe(responsive({
            '*': [{
                width: 1024,
                quality: 80,
                upscale: false,
                suffix: '-1024',
                }]
            }))
        .pipe(gulp.dest(paths.img.output));
});

// minify JS files to make them smaller
gulp.task('js', function() {
    gulp.src(paths.js.src)
    .pipe(uglify())
    .pipe(rename({ suffix:'.min' }))
    .pipe(gulp.dest(paths.js.dest));
});

// lint the JS files: check for errors and inconsistencies
gulp.task('jslint', function() {
    gulp.src(paths.js.src)
    .pipe(eslint({
        configFile: 'eslint.json',
        fix: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// watch the JS files for changes, run jslin and js tasks when they do
gulp.task('watch', function() {
    gulp.watch(paths.js.src, ['jslint', 'js']);
});

// when running `gulp`, do the four image tasks
gulp.task('default', ['images:optimise', 'images:small', 'images:medium', 'images:large']);
