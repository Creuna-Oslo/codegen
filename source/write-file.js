/* eslint-env node */
/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

function writeFile(filePath, fileContent, prettierOptions) {
  const fileName = path.basename(filePath);
  const prettierConfig = Object.assign({ parser: 'babel' }, prettierOptions);

  fs.writeFile(filePath, prettier.format(fileContent, prettierConfig), {}, err => {
    if (!err) {
      console.log(`💾  ${chalk.blueBright(fileName)} saved`);
    } else {
      console.log(`👻  ${chalk.red('Error writing')} ${chalk.blueBright(fileName)}`, err);
    }
  });
}

module.exports = writeFile;
