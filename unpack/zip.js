/**
 * @file 解压zip格式
 * @author otakustay
 */

import {execSync as exec} from 'child_process';

export default function (sourceFile, destinationFolder) {
    exec(`unzip -qq "${sourceFile}" -d "${destinationFolder}"`, {stdio: 'inherit'});
}
