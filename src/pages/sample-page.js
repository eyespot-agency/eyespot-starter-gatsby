/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
import { Link } from 'gatsby';

// UI lib components
import { Container } from 'react-grid-system';

// Page wrappers
import Layout from '../shared/PageLayout';
import Seo from '../shared/Seo';

// Local page components
import SampleComponent from '../page-components/SamplePage/SampleComponent';

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function SamplePage() {
  return (
    <Layout>
      <Seo title="Sample page" />
      <Container fluid>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <SampleComponent />
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Layout>
  );
}

export default SamplePage;
