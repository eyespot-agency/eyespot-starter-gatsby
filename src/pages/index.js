/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

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
  /* ********************************** HOOKS ********************************* */

  // Localization
  const { t } = useTranslation();

  /* ******************************** RENDERING ******************************* */
  return (
    <PageLayout>
      <Seo title={t('title')} />
      <Container fluid>
        <h1>{t('title')}</h1>
        <Trans>title</Trans>
        <Image src="eyespot-logo-extended.png" alt="An astronaut" />
      </Container>
    </PageLayout>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["HomePage", "Common"] }
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

export default IndexPage;
