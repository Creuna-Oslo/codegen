const path = require('path');
const test = require('ava');

const testWithFixture = require('./helpers/test-with-fixture');

test('Creates paths file', testWithFixture, {
  fixturePath: path.join(__dirname, 'fixtures', 'pages'),
  testSubject: require('../index').createPathsFile,
  expected: `module.exports = ["/page-a", "/b"];
`
});
