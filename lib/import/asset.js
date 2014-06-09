'use strict';

var Path = require('path'),
    request = require('request'),
    mkdirp = require('mkdirp'),
    fs = require('fs');

function localize(url) {
    return url.replace(/http(s)?.+wp-content(\/.+)/, '$2');
}

function Asset(item, target) {
    this.item = item;
    this.target = target;
}

Asset.download = function(item, target, next) {
    var asset = new Asset(item, target);
    asset.get(next);
};

Asset.prototype = {
    get url() {
        return this.item['wp:attachment_url'];
    },

    get path() {
        return localize(this.url);
    },

    get targetPath() {
        return Path.resolve(Path.join(this.target, this.path));
    },

    get: function(done) {

        mkdirp(Path.dirname(this.targetPath), function(err) {
            var stream = fs.createWriteStream(this.targetPath);
            if (err) console.log(err);
            console.log('downloading %s', this.url);
            request(this.url).pipe(stream);
            stream.on('finish', done);
        }.bind(this));
    }
};

module.exports = Asset;
