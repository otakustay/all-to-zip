/**
 * @file 程序调用入口
 * @author otakustay
 */

import 'babel-polyfill';

import path from 'path';
import temp from 'temp';
import {execSync as exec} from 'child_process';
import unpack from './unpack/index';

temp.track();

let unpackFile = file => {
    let extension = path.extname(file);

    let destinationFolder = temp.mkdirSync();
    unpack[extension.slice(1)](file, destinationFolder);

    return destinationFolder;
};

let packZip = async (sourceFolder, destinationFile) => {
    exec(`zip -r -0 "${path.resolve(destinationFile)}" ./*`, {cwd: sourceFolder});
};

export default function (list, outputFolder) {
    for (let i = 0; i < list.length; i++) {
        let file = list[i];
        let info = path.parse(file);
        let prefix = `[${i + 1}/${list.length}]`;

        try {
            console.log(`${prefix} Extracting ${info.base}`);

            let folder = unpackFile(file);
            let zipFile = info.name + '.zip';

            console.log(`${prefix} Packing ${info.base} to ${zipFile}`);

            packZip(folder, path.join(outputFolder, zipFile));

            console.log(`${prefix} Finished ${info.base}`);
        }
        catch (error) {
            console.error(`Failed to convert ${info.base}: ${error.message}`);
        }
    }
}
