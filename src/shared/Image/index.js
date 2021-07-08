/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Pakcages
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

// UI lib comoponents
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function Image({ src, alt }) {
  /* ******************************** RENDERING ******************************* */

  if (process.env.STORYBOOK === 'enabled') {
    return <img src={src} alt={alt} />;
  }
  // Based on this awesome solution:
  // https://stackoverflow.com/questions/55122752/reusable-gatsby-image-component-with-dynamic-image-sources
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const imageNodeParent = data.images.edges.find((n) => {
          return n.node.relativePath.includes(src);
        });
        if (!imageNodeParent) {
          return null;
        }
        const image = getImage(imageNodeParent.node);
        return <GatsbyImage image={image} alt={alt} />;
      }}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  src: '',
  alt: '',
};

export default Image;
