var html2markdown = require('html2markdown');


module.exports = {
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
            cat = category ? category[0] : '';

        if (typeof cat === 'object') cat = 'uncategorized';

        return {
            title: item.title,
            date: item.pubDate,
            author: item['dc:creator'],
            category: cat.toLowerCase(),
        };
    },

    slug: function(item) {
        str = item.title + '';
        str = str.replace(/\W/g, ' ').trim().toLowerCase();

        return str.replace(/\s+/g, '-');
    }
};
