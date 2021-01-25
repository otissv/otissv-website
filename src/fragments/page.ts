import { graphql } from "gatsby";

export const page = graphql`
  fragment page on Query {
    allDataYaml {
      nodes {
        company {
          name
          email
          telephone
          address
        }
        menu {
          label
          url
          cta
        }
        site {
          title
          description
          author
          lang
        }
        social {
          label
          url
          share
        }
        subscribe {
          title
          content
          form {
            info
            button {
              label
            }
            input {
              label
              id
              placeholder
            }
          }
        }
      }
    }
  }
`;
