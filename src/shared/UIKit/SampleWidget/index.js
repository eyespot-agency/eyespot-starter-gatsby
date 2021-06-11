/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';

// UI lib components
import { Container } from 'react-grid-system';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function SampleWidget({ someProp }) {
  return <Container className="sample-widget">{someProp}</Container>;
}

SampleWidget.propTypes = {
  someProp: PropTypes.string,
};

SampleWidget.defaultProps = {
  someProp: '',
};

export default SampleWidget;
