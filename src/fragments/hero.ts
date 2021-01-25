import { graphql } from "gatsby";

export const hero = graphql`
  fragment hero on Query {
    allDataYaml {
      nodes {
        hero {
          title
          lead
          socialInfo
          cta
        }
      }
    }
  }
`;
