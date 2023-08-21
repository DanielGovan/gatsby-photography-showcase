require('dotenv').config({
  path: `.env`,
});
// if (process.env.DEV) {
//   require('dotenv').config({
//     path: `.env.${process.env.NODE_ENV}.development`,
//   });
// } else {
//   require('dotenv').config({
//     path: `.env.${process.env.NODE_ENV}`,
//   });
// }
module.exports = {
  siteMetadata: {
    title: `Photography site`,
    description: `Amazing photography in London`,
    author: `Dan Govan`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-145899730-1', // Google Analytics / GA UA-145899730-1
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    // `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: `false`,
        defaults: {
          // formats: [`auto`, `webp`],
          // placeholder: `dominantColor`,
          quality: 80,
          // breakpoints: [750, 1080, 1366, 1920],
          // backgroundColor: `transparent`,
          // blurredOptions: {},
          // jpgOptions: {},
          // pngOptions: {},
          // webpOptions: {},
          // avifOptions: {},
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp-exif`,
    // Main pics: gallery, fav(index), fun(collab), hero(other)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `galleryPicks`,
        path: `${__dirname}/src/imagesv3/galleryPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `favPicks`,
        path: `${__dirname}/src/imagesv3/favPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `funPicks`,
        path: `${__dirname}/src/imagesv3/funPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `heroPicks`,
        path: `${__dirname}/src/imagesv3/heroPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pollOptions`,
        path: `${__dirname}/src/imagesv3/pollOptions`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contextPicks`,
        path: `${__dirname}/src/imagesv3/contextPicks`,
      },
    },
    // types pics (commissions page)

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `btsPicks`,
        path: `${__dirname}/src/imagesv3/types/btsPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `couplesPicks`,
        path: `${__dirname}/src/imagesv3/types/couplesPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dragPicks`,
        path: `${__dirname}/src/imagesv3/types/dragPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `headShotPicks`,
        path: `${__dirname}/src/imagesv3/types/headShotPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fitnessPicks`,
        path: `${__dirname}/src/imagesv3/types/fitnessPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `rangePicks`,
        path: `${__dirname}/src/imagesv3/types/rangePicks`,
      },
    },

    // retrospective pics
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clubbingPicks`,
        path: `${__dirname}/src/imagesv3/retrospective/clubbingPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `performerPicks`,
        path: `${__dirname}/src/imagesv3/retrospective/performerPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentaryPicks`,
        path: `${__dirname}/src/imagesv3/retrospective/documentaryPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `inSituPicks`,
        path: `${__dirname}/src/imagesv3/retrospective/inSituPicks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `inspoPicks`,
        path: `${__dirname}/src/imagesv3/retrospective/inspoPicks`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-gallery-site`,
        short_name: `gallery`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/imagesv2/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: '@chakra-ui/gatsby-plugin',
    //   options: {
    //     /**
    //      * @property {boolean} [resetCSS=true]
    //      * if false, this plugin will not use `<CSSReset />
    //      */
    //     resetCSS: true,
    //     /**
    //      * @property {boolean} [isUsingColorMode=true]
    //      * if false, this plugin will not use <ColorModeProvider />
    //      */
    //     isUsingColorMode: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
