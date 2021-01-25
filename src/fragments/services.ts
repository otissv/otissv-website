import { graphql } from "gatsby";

export const services = graphql`
  fragment services on Query {
    allDataYaml {
      nodes {
        services {
          url
          content
        }
      }
    }
  }
`;
