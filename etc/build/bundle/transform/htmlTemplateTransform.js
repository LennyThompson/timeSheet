var ng2TemplateParser = require('gulp-inline-ng2-template/parser');
var through = require('through2');
var options = {
    target: 'es5',
    UseRelativePaths: true,
    indent: 0,
    removeLineBreaks: true
};

exports = module.exports = function (file)
{
    return through(
        function (buf, enc, next)
        {
            var that = this;
            ng2TemplateParser(
            {
                contents: buf,
                path: file
            },
            options
            )
            (
                function(err, result)
                {
                    that.push(result);
                    process.nextTick(next);
                }
            );
        }
    );
}