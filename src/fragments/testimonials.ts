import { graphql } from "gatsby";

export const testimonials = graphql`
  fragment testimonials on Query {
    allDataYaml {
      nodes {
        testimonials {
          name
          city
          avatar
          content
        }
      }
    }
  }
`;
