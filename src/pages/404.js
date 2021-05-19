/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';

// UI lib components
import { Container } from 'react-grid-system';

// Page wrappers
import Layout from '../shared/Layout';
import Seo from '../shared/Seo';

// Local page components
// @TODO: Import local components here

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <Container>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Layout>
  );
}

export default NotFoundPage;
