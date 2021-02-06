/* eslint-disable no-undef */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statement */

module.exports = {
  siteMetadata: {
    title: `Otis weblog`,
    description: `This is my coding blog where I write about my coding journey.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-feed-mdx`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-portal`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: false,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // eslint-disable-next-line no-undef
        path: `${__dirname}/content/data`,
        name: `data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // eslint-disable-next-line no-undef
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `GatsbyJS`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#f7f0eb`,
    //     theme_color: `#a2466c`,
    //     display: `standalone`,
    //   },
    // },
  ],
};
