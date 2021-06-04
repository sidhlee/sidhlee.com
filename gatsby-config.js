module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 5, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
  ],
  flags: {
    THE_FLAG: false,
    // Remove Warning: Expected server HTML to contain a matching <div> in <div>.
    // https://stackoverflow.com/questions/46865880/react-16-warning-expected-server-html-to-contain-a-matching-div-in-div-due
    DEV_SSR: false,
  },
}
