/**
 * @file 解压zip格式
 * @author otakustay
 */

import {execSync as exec} from 'child_process';

export default function (sourceFile, destinationFolder) {
    exec(`unzip "${sourceFile}" -d "${destinationFolder}"`, {stdio: [process.stdin, 'pipe', process.stderr]});
}
