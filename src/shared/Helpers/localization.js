/* ********************************** DRAFT ********************************* */

import { graphql } from 'gatsby';

/**
 * @TOO: This is a work in progress implementation that won't work outside
 * of a page in a client runtime environment
 * Performs a static query that queries a page or component locale
 * @param {String} localName - Conventional local name (`Common` or PageName)
 */
export const queryLocale = (localeName) => {
  return (
    graphql`
      query ($language: String!, $localeName: String!) {
        locales: allLocale(
          filter: { ns: { in: [$localeName] }, language: { eq: $language } }
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
    `,
    { localeName }
  );
};
