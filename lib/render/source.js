'use strict';

var Walk = require('walk'),
    Path = require('path');

function mkPaths(source, options) {
    var relative = source.replace(new RegExp(options.source + '(\/.+).md'), '$1/');

    return {
        source: source,
        path: relative,
        target: Path.join(options.target, relative, 'index.html')
    };
}

module.exports = {
    import: function(options, done) {
        var walker = Walk.walk(options.source),
            collect = [];

        walker.on('file', function(root, stats, next) {
            if (!stats.name.match(/[.]md$/)) return next();

            collect.push(mkPaths(Path.join(root, stats.name), options));

            next();
        });

        walker.on('end', function() {
            done(null, collect);
        });
    }
};
