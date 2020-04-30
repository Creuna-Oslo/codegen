const createFile = require('./source/create-file');

const stringifyPropTypes = require('./source/stringifiers/proptypes-file');
const stringifyComponents = require('./source/stringifiers/components-file');
const stringifyPages = require('./source/stringifiers/pages-file');
const stringifyPaths = require('./source/stringifiers/paths-file');

module.exports = {
    createProptypesFile: options => createFile(stringifyPropTypes, options),
    createComponentsFile: options => createFile(stringifyComponents, options),
    createPagesFile: options => createFile(stringifyPages, options),
    createPathsFile: options => createFile(stringifyPaths, options)
};
