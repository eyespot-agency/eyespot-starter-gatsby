/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
import { Link } from 'gatsby';

// UI lib components
import { Container } from 'react-grid-system';

/* ------------------------------ Static Image ------------------------------ */
import { StaticImage } from 'gatsby-plugin-image';

/* ---------------------------- Google analytics ---------------------------- */
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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

      <OutboundLink href="https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/">
        OutboundLink component To make it easy to track clicks on outbound links
        in Google Analytics, the plugin provides a component. Visit the Google
        Analytics plugin page!
      </OutboundLink>
    </Layout>
  );
}

export default SamplePage;
