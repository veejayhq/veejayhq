#!/usr/bin/env node

'use strict';

var generate = require('./lib/render'),
    importer = require('./lib/import'),
    connect = require('connect'),
    Path = require('path');

var program = require('commander');

program.option('-p, --port <port>', 'specify the port [3000]', Number, process.env.PORT || 8080);

function help() {
    console.log('Usage:\n');
    console.log('$ cmd.js build content public\n');
    console.log('$ cmd.js serve public\n');
    console.log('');
}

function build(src, dst) {
    var options = {
        source: Path.resolve(src),
        assets: Path.resolve(__dirname + '/assets'),
        target: Path.resolve(dst),
    };

    generate(options, function() {
        process.exit();
    });
}

function serve(path) {
    var server = connect();
    server.use(connect.static(path));

    server.listen(program.port, function() {
        console.log('serving %s on port %s', path, program.port);
    });
}

program.on('--help', help);

program
    .command('serve <path>')
    .description('serve site')
    .action(serve);

program
    .command('build <src> <dst>')
    .description('build site')
    .action(build);

program
    .command('import <src.xml> <dst>')
    .description('import wordpress xml file')
    .action(function(src, dst) {
        importer(Path.resolve(src), Path.resolve(dst));
    });

program
    .command('*')
    .action(function() {
        console.error('ERR: No action specified\n');
        help();
    });


program.parse(process.argv);
