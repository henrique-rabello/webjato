/// <binding ProjectOpened='default' />
/// <vs SolutionOpened='default' />
var autoprefixer = require('autoprefixer-core');
var browserSync = require('browser-sync');
var gettext = require('gulp-angular-gettext');
var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var postcss = require('gulp-postcss');

gulp.task('Watches', function () {
    gulp.watch('src/libs/js/*.js', ['SetupPublishSource']);
    gulp.watch('src/js/**/*.js', ['SetupPublishSource']);
    gulp.watch('src/js/**/*.{css,less}', ['SetupPublishSource']);
    gulp.watch('preview/*-tpl.html', ['SetupPublishSource']);
});

gulp.task('BrowserSync', function () {
    browserSync({
        files: ['*.html', 'config/*.html', 'content/*.html', 'css/*.css', 'help/*.html', 'preview/*.html', 'publish/**/*.*', 'scripts/*.js', 'visual/*.html'],
        proxy: "http://local-tool-v2.webjato.com.br",
        reloadDelay: 2000
    });
});

gulp.task('SetupPublishSource', ['CSS', 'Libs', 'JS'], function () {
    //CSS
    gulp.src(['css/animate.css', 'css/menu.css', 'css/wj.css'])
        .pipe(gulp.dest('publish/tpl/css/'));
    //JS
    gulp.src(['scripts/wj*.js', ])
        .pipe(gulp.dest('publish/tpl/js/'));
    //TPL HTML
    gulp.src(['preview/*-tpl.html'])
        .pipe(gulp.dest('publish/tpl/'));

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
              'src/js/entities/enums/*.js',
              'src/js/entities/general/*.js',
              'src/js/entities/content/ContentPosition.js',
              'src/js/entities/content/ContentSize.js',
              'src/js/entities/content/BoxBorder.js',
              'src/js/entities/content/ContentBase.js',
              'src/js/entities/content/SimpleImage.js',
              'src/js/entities/content/SocialPlugin.js',
              'src/js/entities/content/ScalableImage.js',
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

gulp.task('TranslateJS', ['TranslatePOT', ], function () {
    gulp.src(['src/po/*.po/'])
        .pipe(gettext.compile())
        .pipe(gulp.dest('src/po/'));
});

gulp.task('default', ['SetupPublishSource', 'Watches', 'BrowserSync']);