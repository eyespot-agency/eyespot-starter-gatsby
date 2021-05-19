/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Local UI components
import PageLayout from '../PageLayout';

// Style
import './index.scss';

/**
 * Layout component for MDX files
 */
function PostLayout({ children }) {
  return <PageLayout>{children}</PageLayout>;
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostLayout;
