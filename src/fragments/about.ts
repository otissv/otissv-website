import { graphql } from "gatsby";

export const about = graphql`
  fragment about on Query {
    allDataYaml {
      nodes {
        about {
          content
          lead
          title
        }
      }
    }
  }
`;
