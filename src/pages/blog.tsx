import React from "react";
import { graphql } from "gatsby";
import { Box } from "@redesign-system/react-ui/Box";
import { Typography } from "@redesign-system/react-ui/Typography";

import { PageProps } from "./types.page";
import { PageLayout } from "../features/PageLayout";
import { useYamlNodes } from "../hooks/useYamlNodes";

import { PostItem } from "../components/PostItem";
import { Lead } from "../components/Lead";

export default function Blog<Page extends PageProps>({
  data: {
    allDataYaml: { nodes: dataNodes },
    posts,
  },
  ...propsRest
}: Page): JSX.Element {
  const { social, company, ...data } = useYamlNodes(dataNodes);

  return (
    <PageLayout company={company} social={social} {...data} page={propsRest}>
      <Box centered mw="760px" mt={10}>
        <Box px={5} mq={{ md: { min: { paddingLeft: 0, paddingRight: 0 } } }}>
          <Lead as="h1">Weblog</Lead>
          <Typography my={4}>
            Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidya lorem
            animal iracundia. Ius te altera essent incorrupte. Id alien accu
            consetetur em, nibh aliquam iracundia. Lorem ipsum dolor sit amet,
          </Typography>
          <Typography mb={10}>
            hendrerit omittantur mel, es vidya lorem animal iracundia. Ius te
            altera essent incorrupte. Id alien accu consetetur em, nibh aliquam
            iracundia.
          </Typography>
        </Box>

        <Box centered mw="760px">
          {posts.nodes.map(({ id, slug, excerpt, frontmatter }: any) => (
            <PostItem
              key={id}
              slug={slug}
              excerpt={excerpt}
              {...frontmatter}
            ></PostItem>
          ))}
        </Box>
      </Box>
    </PageLayout>
  );
}

export const query = graphql`
  query POSTS_INDEX_QUERY {
    ...page
    ...postsIndex
  }
`;
