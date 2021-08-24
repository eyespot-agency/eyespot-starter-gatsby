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
import { Link, graphql } from 'gatsby';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';

// Lib UI components
import { Container } from 'react-grid-system';

// Local UI components
import PageLayout from '../shared/PageLayout';
import Seo from '../shared/Seo';
import Image from '../shared/Image';
import SampleComponent from '../page-components/<%= pageName %>/SampleComponent';

// Style
import '../page-styles/<%= pageName %>.scss';

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function <%= pageName %>() {
  /* ********************************** HOOKS ********************************* */

  // Localization
  const { t } = useTranslation();

  /* ******************************** RENDERING ******************************* */
  return (
    <PageLayout>
      <Seo title="<%= pageTitle %>" />
      <Container className="<%= pagePath %>" fluid>
        <h1>{t('title')}</h1>
        <Trans>title</Trans>
        <Image src="gatsby-astronaut.png" alt="An astronaut" />
        <SampleComponent />
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </PageLayout>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["<%= pageName %>", "Common"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default <%= pageName %>;
