"use strict";
var tsify = require("tsify");
var templateTransform = require("./etc/build/bundle/transform/htmlTemplateTransform");

exports = module.exports = function (config) {

    config.set({

        autoWatch: true,
        basePath: "",
        browserify: {
            debug: false,
            configure: function (bundle)
            {
                bundle.once('prebundle', function()
                {
                    console.log('bundling this shite...');
                    bundle.plugin(tsify)
                        .transform(templateTransform);
                })
            }
        },
        browsers: ["PhantomJS"],
        colors: true,
        concurrency: Infinity,
        exclude: [],
        files: [
            "typings/index.d.ts",
            "app/before.ts",
            "app/**/*-spec.ts"
        ],
        frameworks: ["browserify", "mocha"],
        logLevel: config.LOG_INFO,
        port: 9876,
        preprocessors: {
            "app/**/*.ts": ["browserify"]
        },
        proxies: {},
        reporters: ["spec"],
        singleRun: false
    });
};