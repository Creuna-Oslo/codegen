const createFile = require('./source/create-file');

const stringifyComponents = require('./source/stringifiers/components-file');
const stringifyPages = require('./source/stringifiers/pages-file');
const stringifyPaths = require('./source/stringifiers/paths-file');

module.exports = {
  createComponentsFile: options => createFile(stringifyComponents, options),
  createPagesFile: options => createFile(stringifyPages, options),
  createPathsFile: options => createFile(stringifyPaths, options)
};
