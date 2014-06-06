var parser = require('xml2json'),
    Path = require('path'),
    async = require('async'),
    mkdirp = require('mkdirp'),
    Post = require('./lib/import/post'),
    fs = require('fs');

var DATA_FILE = 'wordpress.2014-06-03.xml',
    TARGET_DIR = __dirname + '/content';

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
        fs.writeFile(path, str, done);
    });
}

function generate(item, next) {
    var post;

    if (item['wp:status'] !== 'publish') return next();

    Post.generate( item, function( err, post ){
        if( err ) {
            // error handling we do here, continue without
            // breaking the chain.
            console.error('error parsing post: %s', 1||err );
            return next();
        }

        if (!post.content){
            console.warn('post with no content ignored: %s', post.title );
            return next();
        }

        writeFile(TARGET_DIR, post, next);
    });
}

function main() {

    getData(DATA_FILE, function(err, data) {

        async.each(data.rss.channel.item, function(item, next) {
            var type = item['wp:post_type'];

            if (type == 'post' || type == 'page') {
                generate(item, next);
                return;
            }

            next();
        }, function() {
            console.log('export done');
        });
    });

}

main();
