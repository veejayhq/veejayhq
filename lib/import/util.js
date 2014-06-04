var html2markdown = require('html2markdown');


var Util = {
    content: function(item) {
        try {
            return html2markdown(item['content:encoded']);
        } catch (err) {
            console.error('SKIP POST %s', item.title);
            return '';
        }
    },

    meta: function(item) {
        var category = item.category,
            meta = null,
            cat = category ? category[0] : null;

        if (typeof cat === 'object') cat = 'uncategorized';

        meta = {
            title: item.title,
            name: Util.slug(item),
            type: item['wp:post_type'],
            date: item.pubDate,
            author: item['dc:creator'],
        };

        if (cat) meta.category = cat.toLowerCase();

        return meta;
    },

    slug: function(item) {
        str = item.title + '';
        str = str.replace(/\W/g, ' ').trim().toLowerCase();

        return str.replace(/\s+/g, '-');
    }
};

module.exports = Util;
