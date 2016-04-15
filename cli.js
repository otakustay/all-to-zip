#! /usr/bin/env node

/**
 * @file 命令行调用入口
 * @author otakustay
 */

'use strict';

let glob = require('glob').sync;

const CLI_ALIAS = {
    output: 'o'
};

var argv = require('minimist')(process.argv.slice(2), {alias: CLI_ALIAS});

if (!argv.output) {
    console.error('Must specify output folder with -o option');
    process.exit(1);
}

let files = argv._.length ? argv._ : glob('./*.{zip,rar}');

require('mkdirp').sync(argv.output);
require('./index')(files, argv.output);
