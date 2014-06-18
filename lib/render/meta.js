'use strict';

var Front = require('yaml-front-matter'),
    ellipsize = require('ellipsize'),
    Path = require('path'),
    async = require('async'),
    _ = require('lodash');

function teaser(string) {
    var tsr = string.replace(/[[\]\\(\)]/g, ' ');
    return ellipsize(tsr, 200);
}

function category(target, pages, meta, post) {
    var cat = pages.categories[meta.category] || null;

    if (!cat) {
        cat = {
            title: meta.category,
            type: 'category',
            path: '/' + Path.join('category', meta.category + '/'),
            target: Path.join(target, 'category', meta.category, 'index.html'),
            posts: []
        };
    }

    cat.posts.push(post);

    return cat;
}

function isPost( meta, source ){
    var re = /^.+\/content\/category\/(.+)\/(.+)[.]md$/;

    if( re.test( source ) ){
        meta.category = source.replace( re, '$1' );
    }

    return meta;
}

function meta(pages, collect, target, done) {
    async.reduce(pages, collect, function(collect, page, next) {
        var meta = Front.loadFront(page.source),
            content = meta.__content;

        delete(meta.__content);

        _.extend(page, meta, {
            content: content,
            teaser: teaser(content),
            date: new Date(meta.date)
        });

        meta = isPost( meta, page.source );

        if (meta.category) {
            collect.categories[meta.category] = category(target, collect, meta, page);
        }

        collect[meta.type + 's'].push(page);
        next(null, collect);
    }, done);
}

module.exports = {
    import: function(options, pages, done) {
        var collect = {
            categories: {},
            pages: [],
            posts: []
        };

        meta(pages, collect, options.target, function(err, data) {
            var home = _.find(data.pages, {
                name: 'home'
            });

            home.target = Path.join(options.target, 'index.html');

            data.pages = _.reject(data.pages, {
                name: 'home'
            });

            data.home = home;

            _.each(data.categories, function(cat) {
                cat.posts = _.sortBy(cat.posts, 'date').reverse();
            });


            done(null, data);
        });

    }
};
