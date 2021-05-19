module.exports = {
  siteMetadata: {
    title: 'Eyespot Starter Gatsby',
    description:
      'Eyespot Gatsby starter with essential Eyespot conventions and React/JavaScript standards',
    author: 'EMIKETIC Technologies <contact@emiketic.com>',
    siteUrl: 'http://eyespot.agency/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: ['./src/shared/styles/index'],
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-advanced-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
