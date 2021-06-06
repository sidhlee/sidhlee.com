module.exports = {
  siteMetadata: {
    title: `Sid Lee Developer`,
    description: `Web developer Sid Lee's Portfolio Site`,
    author: `Sid Hayoun Lee`,
    url: `https://www.sidhlee.com`,
    twitterUsername: "@sidhlee",
    // https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/#adding-assets-outside-of-the-module-system
    image: "/preview.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `${__dirname}/content/skills`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sidhlee.com`,
        short_name: `sidhlee.com`,
        start_url: `/`,
        background_color: `#084887`,
        theme_color: `#084887`,
        display: `minimal-ui`,
        icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-typescript`,
  ],
  flags: {
    THE_FLAG: false,
    // Remove Warning: Expected server HTML to contain a matching <div> in <div>.
    // https://stackoverflow.com/questions/46865880/react-16-warning-expected-server-html-to-contain-a-matching-div-in-div-due
    DEV_SSR: false,
  },
}
