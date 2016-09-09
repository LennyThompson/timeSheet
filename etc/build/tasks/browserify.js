var gulp = require("gulp");
var browserify = require("browserify");
var tsify = require("tsify");
var join = require("path").join;
var source = require("vinyl-source-stream");

var templateTransform = require("../bundle/transform/htmlTemplateTransform");

var APP = require("../config/config").APP;

exports = module.exports = function()
{
    var bundler = browserify(join(APP.path, APP.main))
        .plugin(tsify)
        .transform(templateTransform);

    return bundler.bundle()
        .pipe(source(APP.result))
        .pipe(gulp.dest(APP.outdir));
};


