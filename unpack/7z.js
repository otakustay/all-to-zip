/**
 * @file 解压zip格式
 * @author otakustay
 */

'use strict';

let exec = require('child_process').execSync;

module.exports = (sourceFile, destinationFolder) => {
    exec(`7za x "${sourceFile}" -o"${destinationFolder}" -bso2`, {stdio: [process.stdin, 'pipe', process.stderr]});
};
