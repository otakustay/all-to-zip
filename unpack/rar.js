/**
 * @file 解压rar格式
 * @author otakustay
 */

import {execSync as exec} from 'child_process';

export default function (sourceFile, destinationFolder) {
    exec(`unrar x "${sourceFile}" "${destinationFolder}"`, {stdio: [process.stdin, 'pipe', process.stderr]});
}
