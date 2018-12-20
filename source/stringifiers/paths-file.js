module.exports = (pages = []) => {
  const paths = pages.map(page => `'${page.path}'`);

  return `module.exports = [\n${paths.join(',\n')}];`;
};
