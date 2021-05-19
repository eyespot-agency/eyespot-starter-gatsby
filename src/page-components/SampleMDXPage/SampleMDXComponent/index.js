/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Pakcages
import React from 'react';

// UI lib comoponents
import { Container } from 'react-grid-system';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function SampleMDXComponent() {
  /* ******************************** RENDERING ******************************* */

  return (
    <Container className="sample-mdx-component" fluid>
      <div>Sample MDX Component</div>
    </Container>
  );
}

export default SampleMDXComponent;
