const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const tempy = require('tempy');
const test = require('ava');

const { createComponentsFile } = require('../index');

const fixturePath = path.join(__dirname, 'fixtures', 'components');

test('Creates components file', t => {
  const outputPath = tempy.directory();
  fsExtra.copySync(fixturePath, outputPath);

  createComponentsFile({
    fileHeader: '//header',
    fileName: 'components.js',
    outputPath,
    searchPath: outputPath
  });

  const expected = `//header

import A from "./a";
import B from "./b";

export { A, B };
`;

  const fileContent = fs.readFileSync(path.join(outputPath, 'components.js'), 'utf8');
  t.is(expected, fileContent);
});
