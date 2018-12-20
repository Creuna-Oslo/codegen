const importStatement = require('./import-statement');

module.exports = (pages = [], outputPath) => {
  const importStatements = pages.reduce(
    (accumulator, { componentName, folderPath }) =>
      accumulator + importStatement(componentName, outputPath, folderPath),
    ''
  );

  const exportContent = pages.map(
    page =>
      `{
        component: ${page.componentName},
        group: '${page.group}',
        name: '${page.name}',
        path: '${page.path}'
      }`
  );

  const exportStatement = `export default [\n${exportContent.join(',\n')}];`;
  return `${importStatements}\n${exportStatement}\n`;
};
