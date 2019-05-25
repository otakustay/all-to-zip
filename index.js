/**
 * @file 程序调用入口
 * @author otakustay
 */

const path = require('path');
const temp = require('temp');
const chalk = require('chalk');
const {execSync: exec} = require('child_process');
const unpack = require('./unpack/index');
const {withAnswer} = require('./pty');
const {passwords} = require('./config');

const spawn = withAnswer(passwords);

temp.track();

let unpackFile = async file => {
    let extension = path.extname(file);

    let destinationFolder = temp.mkdirSync();
    await unpack[extension.slice(1)](file, destinationFolder, spawn);

    return destinationFolder;
};

let packZip = (sourceFolder, destinationFile) => {
    exec(`zip -r -0 "${path.resolve(destinationFile)}" ./*`, {cwd: sourceFolder});
};

module.exports = async (list, outputFolder) => {
    for (let i = 0; i < list.length; i++) {
        let file = list[i];
        let info = path.parse(file);
        let prefix = `[${i + 1}/${list.length}]`;

        try {
            console.log(`${prefix} Extracting ${info.base}`);

            let folder = await unpackFile(file);
            let zipFile = info.name + '.zip';

            console.log(`${prefix} Packing ${info.base} to ${zipFile}`);

            packZip(folder, path.join(outputFolder, zipFile));

            console.log(`${prefix} Finished ${info.base}`);
        }
        catch (error) {
            console.error(chalk.red(`Failed to convert ${info.base}: ${error.message}`));
        }
    }
}
