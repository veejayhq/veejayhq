'use strict';

var Upndown = require('upndown'),
    tidy = require('htmltidy').tidy,
    Path = require('path');

var TIDY_OPTIONS = {
    wrap: 0,
    'show-body-only': true,
    clean: true,
    'output-html': true
};

var Post = function(item) {
    this.item = item;
};

function slugify(str) {
    str = str.replace(/\W/g, ' ').trim().toLowerCase();

    return str.replace(/\s+/g, '-');

}

Post.generate = function(item, done) {
    var content = item['content:encoded'];

    // munge content a bit from wordpress
    content = content.replace(/^#/gm, '* ');
    content = content.replace(/\n/gm, '<br/>\n');

    tidy(content, TIDY_OPTIONS, function(err, html) {
        if (err) return done(err);

        item.content = (new Upndown()).convert(html);
        item.content = item.content.replace( /[(]http.+\/wp-content(\/.+)[)]/gm, '($1)' );

        return done(null, new Post(item));
    });
};

Post.prototype = {
    get type() {
        return this.item['wp:post_type'];
    },

    get path() {
        if (this.type == 'page') return Path.join(this.slug + '.md');
        return Path.join('category', this.meta.category, this.slug + '.md');
    },

    get slug() {
        return slugify(this.item.title + '');
    },

    get content() {
        return this.item.content;
    },

    get meta() {
        var meta = {
            title: this.item.title,
            name: this.slug,
            type: this.type,
            date: this.item.pubDate,
            author: this.item['dc:creator'],
        };

        if (this.type === 'post') {
            meta.category = this.category;
            meta.tags = this.tags;
        }

        return meta;
    },

    get tags() {
        var terms = this.item.category;

        if (typeof terms == 'string') return [];

        return terms.reduce(function(tags, term) {
            if (term.domain == 'tag' && term.nicename) {
                tags.push(term.nicename);
            }

            return tags;
        }, []);
    },

    get category() {
        var cat = this.item.category;

        if (typeof cat == 'string')
            return cat.toLowerCase();

        for (var i = 0; i < cat.length; i++) {
            if (typeof cat[i] == 'object' && cat[i].domain == 'category') {
                return cat[i].nicename;
            }
        }

        return 'unknown';
    }


};

module.exports = Post;
