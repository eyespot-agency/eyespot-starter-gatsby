/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// UI lib component
import { Container } from 'react-grid-system';

// Local UI components
import PageHeader from '../PageHeader';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
/**
 * PageLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
function PageLayout({ children }) {
  /* ********************************** HOOKS ********************************* */

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  /* ******************************** RENDERING ******************************* */

  return (
    <Container className="page-layout" fluid>
      <PageHeader siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <main>{children}</main>
      <footer />
    </Container>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
