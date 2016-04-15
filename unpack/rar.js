/**
 * @file 解压rar格式
 * @author otakustay
 */

'use strict';

let exec = require('child_process').execSync;

module.exports = (sourceFile, destinationFolder) => {
    exec(`unrar x ${sourceFile} ${destinationFolder}`, {stdio: [process.stdin, 'pipe', process.stderr]});
};
