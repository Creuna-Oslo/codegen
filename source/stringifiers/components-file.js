/* eslint-disable no-console */
const assert = require('assert');
const chalk = require('chalk');
const importStatement = require('./import-statement');

module.exports = (components = [], outputPath) => {
  const importStatements = components.reduce(
    (accumulator, { componentName, folderPath }) =>
      accumulator + importStatement(componentName, outputPath, folderPath),
    ''
  );

  const exportProperties = components
    .map(({ componentName }) => componentName)
    .join(',\n  ');
  const exportStatement = `export {\n${exportProperties}\n}`;

  return `${importStatements}\n${exportStatement}\n`;
};
