/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';

// UI lib components
import { Container } from 'react-grid-system';

// UI local components
import PageLayout from '../shared/PageLayout';
import Seo from '../shared/Seo';
import Image from '../shared/Image';

import '../page-styles/index.scss';

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function IndexPage() {
  return (
    <PageLayout>
      <Seo title="Home" />
      <Container fluid>
        <Image src="gatsby-astronaut.png" alt="An astronaut" />
      </Container>
    </PageLayout>
  );
}

export default IndexPage;
