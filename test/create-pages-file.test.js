const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const tempy = require('tempy');
const test = require('ava');

const { createPagesFile } = require('../index');

const fixturePath = path.join(__dirname, 'fixtures', 'pages');

test('Creates components file', t => {
  const outputPath = tempy.directory();
  fsExtra.copySync(fixturePath, outputPath);

  createPagesFile({
    fileHeader: '//header',
    fileName: 'pages.js',
    outputPath,
    searchPath: outputPath
  });

  const expected = `//header

import A from "./a";
import B from "./b";

export default [
  {
    component: A,
    group: "Pages",
    name: "A",
    path: "/page-a"
  },
  {
    component: B,
    group: "",
    name: "B",
    path: "/b"
  }
];
`;

  const fileContent = fs.readFileSync(path.join(outputPath, 'pages.js'), 'utf8');
  t.is(expected, fileContent);
});
