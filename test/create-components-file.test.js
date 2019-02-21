const path = require('path');
const test = require('ava');

const testWithFixture = require('./helpers/test-with-fixture');

test('Creates components file', testWithFixture, {
  fixturePath: path.join(__dirname, 'fixtures', 'components'),
  testSubject: require('../index').createComponentsFile,
  expected: `import A from "./a";
import B from "./b";

export { A, B };
`
});
