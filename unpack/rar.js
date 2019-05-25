/**
 * @file 解压rar格式
 * @author otakustay
 */

module.exports = (sourceFile, destinationFolder, spawn) => spawn(
    'unrar',
    ['x', sourceFile, destinationFolder]
);
