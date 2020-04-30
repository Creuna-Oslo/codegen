const path = require('path');
const test = require('ava');

const testWithFixture = require('./helpers/test-with-fixture');

test('Creates components file', testWithFixture, {
    fixturePath: path.join(__dirname, 'fixtures', 'components'),
    testSubject: require('../index').createProptypesFile,
    expected: `import propTypes from "prop-types";
import A from "./a";
import B from "./b/b.jsx";

const appComponentsProps = { A: A.propTypes, B: B.propTypes };

export { appComponentsProps };
`
});
