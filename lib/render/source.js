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
            console.log(stats.name, root);
            var source = Path.join(root, stats.name),
                page = mkPaths(source, options);

            collect.push(page);
            next();
        });

        walker.on('end', function() {
            done(null, collect);
        });
    }
};
