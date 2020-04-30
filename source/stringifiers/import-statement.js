const path = require('path');

module.exports = (name, importerPath, modulePath, fileExtension) => {
  var relativePath = '';
  switch (fileExtension) {
    case '.tsx':
      relativePath = path
        .relative(importerPath, modulePath)
        .replace(/\\/g, '/')
        .replace(/\.[^/.]+$/, '');
      return `import {${name}} from './${relativePath}';\n`;
    default:
      relativePath = path.relative(importerPath, modulePath).replace(/\\/g, '/');
      return `import ${name} from './${relativePath}';\n`;
  }
};
