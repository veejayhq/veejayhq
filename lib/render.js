var _ = require('lodash'),
    mkdirp = require('mkdirp'),
    swig = require('swig'),
    markedSwig = require('swig-marked'),
    fs = require('fs'),
    Path = require('path');

markedSwig.useFilter(swig);
markedSwig.useTag(swig);

var TEMPLATE_PATH = Path.resolve(__dirname + '../template');

function render(post, globals, done) {
    var template = Path.join(TEMPLATE_PATH, post.type + '.html');

    fs.readFile(template, function(err, data) {
        var html = swig.renderFile(data, {
            filename: template,
            locals: _.extend({}, {
                page: post
            }, globals)
        });


        mkdirp.sync(Path.dirname(post.target));
        fs.writeFileSync(post.target, html);
    });
}

module.exports = render;
