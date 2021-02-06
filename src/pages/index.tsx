import React from "react";
import { graphql } from "gatsby";

import { PageLayout } from "../features/PageLayout";
import { Contact } from "../features/Contact";
import { useYamlNodes } from "../hooks/useYamlNodes";
import { PageProps } from "../features/PageLayout";
import { Testimonials } from "../features/Testimonials";
import { Services } from "../features/Services";
import { About } from "../features/About";
import { Hero } from "../features/Hero";
import { Technologies } from "../features/Technologies";

export default function Index({
  data: {
    allDataYaml: { nodes: dataNodes },
    images,
  },
  ...propsRest
}: PageProps<Record<string, any>, Record<string, any>, unknown>): JSX.Element {
  const {
    contact,
    company,
    testimonials,
    services,
    about,
    hero,
    social,
    technologies,
    ...data
  } = useYamlNodes(dataNodes);

  return (
    <PageLayout company={company} social={social} {...data} page={propsRest}>
      <Hero social={social} {...hero} images={images} />
      <Services services={services} />
      <About {...about} images={images} />
      <Technologies {...technologies} />
      <Testimonials testimonials={testimonials} />
      <Contact {...contact} telephone={company.telephone} />
    </PageLayout>
  );
}

export const query = graphql`
  query PAGE_QUERY {
    ...page
    ...about
    ...contact
    ...hero
    ...services
    ...technologies
    ...testimonials
    images: file(relativePath: { eq: "me1.jpeg" }) {
      me: childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
