#! /usr/bin/env node

/**
 * @file 命令行调用入口
 * @author otakustay
 */

const glob = require('glob');
const mkdirp = require('mkdirp');
const index = require('./index');

const CLI_ALIAS = {
    output: 'o'
};

const argv = require('minimist')(process.argv.slice(2), {alias: CLI_ALIAS});

if (!argv.output) {
    console.error('Must specify output folder with -o option');
    process.exit(1);
}

let files = argv._.length ? argv._ : glob.sync('./*.{zip,rar,7z}');

mkdirp.sync(argv.output);
index(files, argv.output);
