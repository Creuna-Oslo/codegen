const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const tempy = require('tempy');

const testWithFixture = (t, { expected, fixturePath, testSubject }) => {
  const outputPath = tempy.directory();
  fsExtra.copySync(fixturePath, outputPath);

  testSubject({
    fileHeader: '',
    fileName: 'file.js',
    outputPath,
    searchPath: outputPath
  });

  const fileContent = fs.readFileSync(path.join(outputPath, 'file.js'), 'utf8');
  t.is(expected, fileContent);
};

module.exports = testWithFixture;
