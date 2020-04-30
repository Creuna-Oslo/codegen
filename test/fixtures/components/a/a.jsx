import React from 'react';
import PropTypes from 'prop-types';

const A = () => <div />;

A.propTypes = {
    testString: PropTypes.string,
    testNumber: PropTypes.number,
}

export default A;
