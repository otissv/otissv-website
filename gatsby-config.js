/* eslint-disable functional/no-expression-statement */

// eslint-disable-next-line functional/immutable-data,  no-undef
module.exports = {
  plugins: [
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
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};
