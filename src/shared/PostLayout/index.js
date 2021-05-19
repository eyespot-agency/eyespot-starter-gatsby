/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';

// UI lib components
import { Container } from 'react-grid-system';

// Local UI components
import PageLayout from '../PageLayout';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
/**
 * Layout component for MDX files
 */
function PostLayout({ children }) {
  return (
    <PageLayout>
      <Container className="post-layout" fluid={false}>
        {children}
      </Container>
    </PageLayout>
  );
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostLayout;
