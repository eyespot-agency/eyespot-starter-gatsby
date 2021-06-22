/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';

// UI lib components
import { Container } from 'react-grid-system';

// Page wrappers
import PageLayout from '../shared/PageLayout';
import Seo from '../shared/Seo';

// Local page components
// @TODO Import local components here

import '../page-styles/index.scss';

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function IndexPage() {
  return (
    <PageLayout>
      <Seo title="Home" />
      <Container fluid>Home page</Container>
    </PageLayout>
  );
}

export default IndexPage;
