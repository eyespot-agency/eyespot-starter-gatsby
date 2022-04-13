const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Eyespot Starter Gatsby',
    description:
      'Eyespot Gatsby starter with essential Eyespot conventions and React/JavaScript standards',
    author: 'EMIKETIC Technologies <contact@emiketic.com>',
    siteUrl: 'http://eyespot.agency/',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locale',
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        // Option name in gatsby-source-filesystem
        localeJsonSourceName: 'locale',
        languages: ['en', 'fr'],
        defaultLanguage: 'en',
        // Site URL must provided with HTTPS (when using Helmet)
        siteUrl: 'https://example.com/',
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: '/:lang?/:uid',
            getLanguageFromPath: true,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: { default: path.resolve('./src/shared/PostLayout') },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        // @TODO: Change with actual background and theme color
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      // @TODO: change app ID
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'example.com',
      },
    },
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',

      options: {
        /* Font loading mode */
        mode: 'async',

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        // @TODO: Uncomment for web and Google Fonts preconnect: ['https://fonts.gstatic.com'],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ['Licorice'],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: '/fonts/Licorice-Regular.ttf',
          },
        ],

        /* Web fonts. File link should point to font CSS file. */
        // @TODO: Un comment for web and google fonts
        // web: [
        //   {
        //     /* Exact name of the font as defied in @font-face CSS rule */
        //     name: 'Staatliches',
        //     /* URL to the font CSS file with @font-face definition */
        //     file: 'https://fonts.googleapis.com/css2?family=Staatliches',
        //   },
        // ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
