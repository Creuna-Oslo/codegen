const path = require('path');
const test = require('ava');

const testWithFixture = require('./helpers/test-with-fixture');

test('Creates pages file', testWithFixture, {
  fixturePath: path.join(__dirname, 'fixtures', 'pages'),
  testSubject: require('../index').createPagesFile,
  expected: `import A from "./a";
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
`
});
