const importStatement = require('./import-statement');

module.exports = (components = [], outputPath) => {
  const importStatements = components.reduce(
    (accumulator, { componentName, filePath }) =>
      accumulator + importStatement(componentName, outputPath, filePath),
    ''
  );

  const exportProperties = components
    .map(({ componentName }) => componentName)
    .join(',\n  ');
  const exportStatement = `export {\n${exportProperties}\n}`;

  return `${importStatements}\n${exportStatement}\n`;
};
