var Util = require('./util'),
    Path = require('path');


var Post = function(item) {
    this.item = item;
};

Post.prototype = {
    get type() {
        return this.item['wp:post_type'];
    },

    get path() {
        if (this.type == 'page') return Path.join('page', this.slug + '.md');
        return Path.join('post', this.meta.category, this.slug + '.md');
    },

    get slug() {
        return Util.slug(this.item);
    },

    get content() {
        return Util.content(this.item);
    },

    get meta() {
        return Util.meta(this.item);
    }
};

module.exports = Post;
