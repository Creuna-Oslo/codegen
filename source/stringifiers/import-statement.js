const path = require('path');

module.exports = (name, importerPath, modulePath) => {
  const relativePath = path.relative(importerPath, modulePath).replace(/\\/g, '/');

  return `import ${name} from './${relativePath}';\n`;
};
