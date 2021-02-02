/* eslint-disable no-undef */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable @typescript-eslint/no-var-requires */

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve("src/templates/PostTemplate.tsx");

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then((result) => {
    // eslint-disable-next-line functional/no-conditional-statement
    if (result.errors) {
      // eslint-disable-next-line functional/no-throw-statement
      throw result.errors;
    }
    const posts = result.data.allMdx.nodes;
    // create page for each mdx node
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];
      createPage({
        path: "blog" + post.fields.slug,
        component: postTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // eslint-disable-next-line functional/no-conditional-statement
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
