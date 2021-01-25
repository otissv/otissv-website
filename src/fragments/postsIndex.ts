import { graphql } from "gatsby";

export const postsIndex = graphql`
  fragment postsIndex on Query {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        slug
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
      }
    }
  }
`;
