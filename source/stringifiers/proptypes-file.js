const importStatement = require('./import-statement');

module.exports = (components = [], outputPath, fileExtension) => {
  const importStatements =
    'import propTypes from "prop-types";\n' +
    components.reduce(
      (accumulator, { componentName, filePath }) =>
        accumulator + importStatement(componentName, outputPath, filePath, fileExtension),
      ''
    );

  const propTypesObject =
    'const appComponentsProps = {' +
    components
      .map(({ componentName }) => componentName + ':' + componentName + '.propTypes')
      .join(',\n  ') +
    '\n};\n';

  const exportStatement = `export default {\n appComponentsProps \n}`;

  return `${importStatements}\n${propTypesObject}\n${exportStatement}\n`;
};
