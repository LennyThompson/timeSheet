var CONFIG =
{
    PATHS: {
        es6: ['./app/es6/**/*.js'],
        js: ['./app/**/*.js', '!./app/es6/**.*.js'],
        sass: ['./app/**/*.scss'],
        templates: ['./app/**/*.html']
    },
    APP: {
        path: './app',
        main: 'index.ts',
        result: 'app.bundle.js',
        outdir: './www/build/js/'
    }
}

exports = module.exports = CONFIG;
