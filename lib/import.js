'use strict';

var parser = require('xml2json'),
    Path = require('path'),
    rmdir = require('rmdir'),
    async = require('async'),
    mkdirp = require('mkdirp'),
    Asset = require('./import/asset'),
    Post = require('./import/post'),
    fs = require('fs');

var yaml = require('js-yaml');

function getData(path, done) {
    fs.readFile(path, function(err, xml) {
        var options = {
            object: true,
            reversible: false,
            coerce: true,
            sanitize: false,
            trim: false,
            arrayNotation: false
        };

        done(err, parser.toJson(xml, options));
    });
}

function writeFile(root, item, done) {
    var path = Path.join(root, item.path),
        str = '---\n';

    str += yaml.dump(item.meta);
    str += '---\n';
    str += item.content;

    console.log('Writing: %s', item.path);

    mkdirp(Path.dirname(path), function(err) {
        if( err ) throw err;
        fs.writeFile(path, str, done);
    });
}

function generate(dest, item, next) {
    if (item['wp:status'] !== 'publish') return next();

    Post.generate(item, function(err, post) {
        if (err) {
            // error handling we do here, continue without
            // breaking the chain.
            console.error('error parsing post: %s', 1 || err);
            return next();
        }

        if (!post.content) {
            console.warn('post with no content ignored: %s', post.title);
            return next();
        }

        writeFile(dest, post, next);
    });
}

function main(source, dest) {

    rmdir(dest, function() {
        getData(source, function(err, data) {

            async.each(data.rss.channel.item, function(item, next) {
                var type = item['wp:post_type'];

                if (type == 'post' || type == 'page') {
                    generate(dest, item, next);
                    return;
                }

                if (item['wp:attachment_url']) {
                    Asset.download(item, dest, next);
                    return;
                }

                next();
            }, function() {
                console.log('export done');
            });
        });
    });
}

module.exports = main;
