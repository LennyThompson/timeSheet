var tslint = require('gulp-tslint');
var expectFile = require('gulp-expect-file');
var gulp = require('gulp');
var gutil = require('gulp-util');
var karma = require('karma');
var karmaParseConfig = require('karma/lib/config').parseConfig;
var cleanCss = require('gulp-clean-css');
var path = require('path');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var semver = require('semver');
var sh = require('shelljs');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var templateTransform = require('./etc/build/bundle/transform/htmlTemplateTransform');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

var browserifyTask = require("./etc/build/tasks/browserify");
var watchBrowserifyTask = require("./etc/build/tasks/watch-browserify");


var pkg = require('./package.json');

var config = {
    paths: {
        es6: ['./app/es6/**/*.js'],
        js: ['./app/**/*.js', '!./app/es6/**.*.js'],
        sass: ['./app/**/*.scss'],
        templates: ['./app/**/*.html']
    },
    app: {
        path: './app',
        main: 'index.ts',
        result: 'app.bundle.js'
    }
};

gulp.task('default', ['lint', 'babel', 'copy', 'sass', 'bundle']);

gulp.task(
    'copy',
    [
        'copy-templates'
    ]
);

gulp.task('copy-templates', function () {

    return gulp.src(config.paths.templates, {
        base: './app/'
    })
        .pipe(gulp.dest('./www/build/'));
});

gulp.task('git-check', function (done) {

    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});

gulp.task('install', ['git-check'], function () {

    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task("babel", function () {
    return gulp.src(config.paths.es6)
        .pipe(plumber())
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest("./app/services/generated/"));
});

gulp.task('lint', function () {

    return gulp.src(['app/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report({
            summarizeFailureOutput: true
        }));
});

gulp.task('bundle', browserifyTask);

gulp.task('sass', function (done) {

    gulp.src('./app/app.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./www/build/css/'))
        .pipe(cleanCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/build/css/'))
        .on('end', done);
});

gulp.task('test', function (done) {

    runKarma('karma.conf.js', {
        autoWatch: false,
        singleRun: true
    }, done);
});

gulp.task('test-watch', function (done) {

    runKarma('karma.conf.js', {
        autoWatch: true,
        singleRun: false
    }, done);
});

gulp.task('watch-bundle', watchBrowserifyTask );

function runKarma(configFilePath, options, callback) {

    // https://gist.github.com/renegare/9173656

    configFilePath = path.resolve(configFilePath);

    var log = gutil.log, colors = gutil.colors;
    var config = karmaParseConfig(configFilePath, {});

    Object.keys(options).forEach(function(key) {

        config[key] = options[key];
    });

    var server = new karma.Server(config, function(exitCode) {

        log('Karma has exited with ' + colors.red(exitCode));
        callback();
        process.exit(exitCode);
    });
    server.start();
}
