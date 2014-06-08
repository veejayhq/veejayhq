'use strict';

var _ = require('lodash'),
    async = require('async'),
    copyr = require('cp-r'),
    rmdir = require('rmdir'),
    Source = require('./render/source'),
    Meta = require('./render/meta'),
    Page = require('./render/page');

function render(data, done) {
    var tasks = [].concat(data.home, data.posts, data.pages, _.values(data.categories));

    async.each(tasks, function(post, next) {
        Page.render(post, data, next);
    }, done);
}

function run(options, done) {

    rmdir(options.target, function() {
        async.waterfall([
            _.partial(Source.import, options),
            _.partial(Meta.import, options),
            render,
            function(next) {
                copyr(options.assets, options.target).read(function() {
                    next();
                });
            }
        ], done);
    });
}

module.exports = run;
