import { graphql } from "gatsby";

export const contact = graphql`
  fragment contact on Query {
    allDataYaml {
      nodes {
        contact {
          form {
            footer
            fields {
              email {
                id
                label
                required
              }
              message {
                id
                label
                required
              }
              subject {
                id
                label
                required
              }
            }
            button
          }
          lead
          quote
          support
          title
        }
      }
    }
  }
`;
