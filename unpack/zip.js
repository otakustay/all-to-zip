/**
 * @file 解压zip格式
 * @author otakustay
 */

module.exports = (sourceFile, destinationFolder, spawn) => spawn(
    '7za',
    ['x', sourceFile, '-bd', `-o${destinationFolder}`, '-bso2']
);
