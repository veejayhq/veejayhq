'use strict';

var Front = require('yaml-front-matter'),
    ellipsize = require('ellipsize'),
    Path = require('path'),
    async = require('async'),
    _ = require('lodash');

function category(PUBLIC_DIR, pages, meta, post) {
    var cat = pages.categories[meta.category] || null;

    if (!cat) {
        cat = {
            title: meta.category,
            type: 'category',
            path: '/' + Path.join('category', meta.category + '/'),
            target: Path.join(PUBLIC_DIR, 'category', meta.category, 'index.html'),
            posts: []
        };
    }

    cat.posts.push(post);

    return cat;
}


function teaser(string) {
    var tsr = string.replace(/[[\]\\(\)]/g, ' ');
    return ellipsize(tsr, 100);
}

module.exports = {
    import: function(PUBLIC_DIR, pages, done) {
        var collect = {
            categories: {},
            pages: [],
            posts: []
        };

        async.reduce(pages, collect, function(collect, page, next) {
            var meta = Front.loadFront(page.source),
                content = meta.__content;

            delete(meta.__content);

            _.extend(page, meta, {
                content: content,
                teaser: teaser(content),
                date: new Date(meta.date)
            });

            if (meta.category) {
                collect.categories[meta.category] = category(PUBLIC_DIR, collect, meta, page);
            }

            collect[meta.type + 's'].push(page);
            next(null, collect);
        }, done);
    }
};
