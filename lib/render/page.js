'use strict';

var _ = require('lodash'),
    mkdirp = require('mkdirp'),
    swig = require('swig'),
    markedSwig = require('swig-marked'),
    fs = require('fs'),
    strftime = require('strftime'),
    Path = require('path');

markedSwig.useFilter(swig);
markedSwig.useTag(swig);

swig.setFilter('strftime', function(dt, format) {
    return strftime(format, dt);
});

swig.setDefaults({
    cache: false
});

var TEMPLATE_PATH = Path.resolve(__dirname + '/../../template');

module.exports = {
    render: function(post, globals, done) {
        var template = Path.join(TEMPLATE_PATH, post.type + '.html');

        fs.readFile(template, function(err, data) {
            var html = swig.render(data.toString(), {
                filename: template,
                locals: _.extend({}, globals, {
                    page: post
                })
            });

            mkdirp.sync(Path.dirname(post.target));

            fs.writeFile(post.target, html, done);
        });
    }
};
