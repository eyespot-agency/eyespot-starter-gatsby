/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
import { Link } from 'gatsby';

// UI lib components
import { Container } from 'react-grid-system';

// Page wrappers
import Layout from '../shared/Layout';
import Seo from '../shared/Seo';

// Local page components
import SampleComponent from '../page-components/PageName/SampleComponent';

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function PageName() {
  return (
    <Layout>
      <Seo title="Page two" />
      <Container>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <SampleComponent />
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Layout>
  );
}

export default PageName;
