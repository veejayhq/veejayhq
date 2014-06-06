var html2markdown = require('html2markdown'),
    Path = require('path');


var Post = function(item) {
    this.item = item;
};

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
        try {
            return html2markdown(this.item['content:encoded']);
        } catch (err) {
            console.error('SKIP POST %s', this.item.title);
            return '';
        }
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
