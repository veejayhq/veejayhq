var upndown = require('upndown'),
    tidy = require('htmltidy').tidy,
    Path = require('path');

var TIDY_OPTIONS = {
    wrap: 0,
    'show-body-only': true,
    clean: true,
    'output-html': true
}

var Post = function(item) {
    this.item = item;
};

Post.generate = function( item, done ){
    var content = item['content:encoded'];

    // munge content a bit from wordpress
    content = content.replace(/^#/gm, '* ' );
    content = content.replace( /\n/gm, '<br/>\n' );

    tidy( content, TIDY_OPTIONS, function(err, html) {
        if( err ) return done( err );

        item.content = (new upndown).convert( html );
        return done( null, new Post( item ) );
    });
}

Post.prototype = {
    get type() {
        return this.item['wp:post_type'];
    },

    get path() {
        if (this.type == 'page') return Path.join(this.slug + '.md');
        return Path.join('post', this.meta.category, this.slug + '.md');
    },

    get slug() {
        str = this.item.title + '';
        str = str.replace(/\W/g, ' ').trim().toLowerCase();

        return str.replace(/\s+/g, '-');
    },

    get content() {
        return this.item.content;
    },

    get meta() {
        var category = this.item.category,
            meta = null,
            cat = category ? category[0] : null;

        if (typeof cat === 'object') cat = 'uncategorized';

        meta = {
            title: this.item.title,
            name: this.slug,
            type: this.type,
            date: this.item.pubDate,
            author: this.item['dc:creator'],
        };

        if (cat) meta.category = cat.toLowerCase();

        return meta;
    }
};

module.exports = Post;
