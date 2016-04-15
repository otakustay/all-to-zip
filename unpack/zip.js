/**
 * @file 解压zip格式
 * @author otakustay
 */

'use strict';

let exec = require('child_process').execSync;

module.exports = (sourceFile, destinationFolder) => {
    exec(`unzip ${sourceFile} -d ${destinationFolder}`, {stdio: [process.stdin, 'pipe', process.stderr]});
};
