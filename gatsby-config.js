const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: "gatsby-plugin-perfume.js",
      options: {
        resourceTiming: true,
        dataConsumption: true,
        firstContentfulPaint: true,
        firstInputDelay: true,
        speedIndex: true,
        largestContentfulPaint: true,
        totalBlockingTime: true,
        timeToInteractive: true,
        maxMeasureTime: 30000
      },
    },
    {
      resolve: `gatsby-plugin-netlify-headers`,
      options: {
        headers: {
          "/*": [
            "Cache-Control: public, max-age=2592000, no-cache",
            "Accept-Encoding: *",
            "Strict-Transport-Security: max-age=2592000",
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["100", "300", "400", "500"],
              fontDisplay: 'swap',
            },
          ],
        },
        formats: ['woff2', 'woff'],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
  ],
};
