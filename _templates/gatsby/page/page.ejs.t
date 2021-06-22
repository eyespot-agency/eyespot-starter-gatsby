---
to: src/pages/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>.js
---
<% const pageName = h.changeCase.pascal(name) -%>
<% const pagePath = h.inflection.dasherize(h.inflection.underscore(name)) -%>
<% const pageTitle = h.inflection.humanize(h.inflection.underscore(name)) -%>
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
import { Link } from 'gatsby';

// Lib UI components
import { Container } from 'react-grid-system';
import { StaticImage } from 'gatsby-plugin-image';

// Local UI components
import PageLayout from '../shared/PageLayout';
import Seo from '../shared/Seo';
import SampleComponent from '../page-components/<%= pageName %>/SampleComponent';

// Style
import '../page-styles/<%= pageName %>.scss';

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function <%= pageName %>() {
  return (
    <PageLayout>
      <Seo title="<%= pageTitle %>" />
      <Container className="<%= pagePath %>" fluid>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <StaticImage
          src="../images/gatsby-astronaut.png"
          alt="A kitten"
          placeholder="blurred"
          layout="fixed"
          width={300}
          height={500}
        />
        <SampleComponent />
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </PageLayout>
  );
}

export default <%= pageName %>;
