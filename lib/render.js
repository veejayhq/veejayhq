#!/usr/bin/env node

'use strict';

var walk = require('walk'),
    _ = require('lodash'),
    async = require('async'),
    copyr = require('cp-r'),
    rmdir = require('rmdir'),
    Meta = require('./render/meta'),
    Page = require('./render/page'),
    Path = require('path');

var CONTENT_PATH = Path.resolve(__dirname + '/../content'),
    ASSET_PATH = __dirname + '/../assets',
    PUBLIC_DIR = __dirname + '/../public';

function mkPaths(source) {
    var relative = source.replace(new RegExp(CONTENT_PATH + '(\/.+).md'), '$1/');

    return {
        source: source,
        path: relative,
        target: Path.join(PUBLIC_DIR, relative, 'index.html')
    };
}

function pages(path, done) {
    var walker = walk.walk(path),
        collect = [];

    walker.on('file', function(root, stats, next) {
        var source = Path.join(root, stats.name),
            page = mkPaths(source);

        collect.push(page);
        next();
    });

    walker.on('end', function() {
        done(null, collect);
    });
}

function home(pages, next) {
    var page = _.find(pages.pages, {
        name: 'home'
    });

    page.target = Path.join(PUBLIC_DIR, 'index.html');
    pages.pages = _.reject(pages.pages, {
        name: 'home'
    });
    pages.home = page;

    next(null, pages);

}

function assets(pages, next) {
    copyr(ASSET_PATH, PUBLIC_DIR).read(function() {
        next(null, pages);
    });
}

function sort(pages, next) {
    _.each(pages.categories, function(cat) {
        cat.posts = _.sortBy(cat.posts, 'date').reverse();
    });

    next(null, pages);
}

function renderAll(data, done) {
    var tasks = [].concat(data.home, data.posts, data.pages, _.values(data.categories));

    async.each(tasks, function(post, next) {
        Page.render(post, data, next);
    }, done);
}

function cleanup(done) {
    rmdir(PUBLIC_DIR, done);
}

function run(done) {
    cleanup(function() {
        async.waterfall([
            _.partial(pages, CONTENT_PATH),
            _.partial(Meta.import, PUBLIC_DIR),
            assets,
            home,
            sort,
            renderAll
        ], done);
    });
}

module.exports = run;
