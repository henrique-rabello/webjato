var autoprefixer = require('autoprefixer-core');
var browserSync = require('browser-sync');
var gettext = require('gulp-angular-gettext');
var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var postcss = require('gulp-postcss');

gulp.task('Watches', function () {
    gulp.watch('src/js/**/*.js', ['JS']);
    gulp.watch('src/js/**/*.{css,less}', ['CSS']);
});

gulp.task('BrowserSync', function () {
    browserSync({
        files: ['*.html', 'config/*.html', 'content/*.html', 'css/*.css', 'help/*.html', 'scripts/*.js', 'visual/*.html'],
        proxy: "http://local-tool-v2.webjato.com.br",
        reloadDelay: 500
    });
});

gulp.task('Libs', ['TranslateJS'], function () {
    gulp.src(['src/libs/js/jquery-1.11.1.min.js',
              'src/libs/js/angular.min.js',
              'src/libs/js/*.js',
              'src/po/*.js/'])
        .pipe(concat('wj-libs.js'))
        .pipe(gulp.dest('scripts/'));
});

gulp.task('JS', function () {
    gulp.src(['src/js/modules.js',
              'src/js/**/*.js'])
        .pipe(concat('wj.js', { newLine: '\r\n' }))
        .pipe(gulp.dest('scripts/'));
});

gulp.task('CSS', function () {
    gulp.src(['src/js/**/*.{css,less}'])
        .pipe(less())
        .pipe(concat('wj.css'))
        .pipe(postcss([autoprefixer({ browsers: ['last 3 version'] })]))
        .pipe(gulp.dest('css/'));
});

gulp.task('TranslatePOT', function () {
    gulp.src(['**/*.html/'])
        .pipe(gettext.extract('template.pot'))
        .pipe(gulp.dest('src/po/'));
});

gulp.task('TranslateJS', ['TranslatePOT',], function () {
    gulp.src(['src/po/*.po/'])
        .pipe(gettext.compile())
        .pipe(gulp.dest('src/po/'));
});

gulp.task('default', ['Libs', 'JS', 'CSS', 'Watches', 'BrowserSync']);