import { graphql } from "gatsby";

export const technologies = graphql`
  fragment technologies on Query {
    allDataYaml {
      nodes {
        technologies {
          title
          lead
        }
      }
    }
  }
`;
