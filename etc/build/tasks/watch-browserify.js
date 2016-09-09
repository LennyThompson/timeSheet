var gulp = require("gulp");
var browserify = require("browserify");
var tsify = require("tsify");
var watchify = require("watchify");
var join = require("path").join;

var source = require("vinyl-source-stream");

var templateTransform = require("../bundle/transform/htmlTemplateTransform");

var APP = require("../config/config").APP;

exports = module.exports = function()
{
    var bundler = watchify(browserify(join(APP.path, APP.main)), { debug: true })
        .plugin(tsify, { noImplicitAny: true })
        .transform(templateTransform);

    bundler.on("update", rebundle);

    function rebundle()
    {
        return bundler.bundle()
            .pipe(source(APP.result))
            .pipe(gulp.dest(APP.outdir));
    }

    return rebundle();
};


