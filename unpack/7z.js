/**
 * @file 解压zip格式
 * @author otakustay
 */

import {execSync as exec} from 'child_process';

export default function (sourceFile, destinationFolder) {
    exec(`7za x "${sourceFile}" -o"${destinationFolder}" -bso2`, {stdio: [process.stdin, 'pipe', process.stderr]});
}
