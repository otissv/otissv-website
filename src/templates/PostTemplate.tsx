import { graphql, PageProps } from "gatsby";
import React, { FC } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Typography } from "@redesign-system/react-ui/Typography";
import { Dropdown } from "@redesign-system/react-ui/Dropdown/Dropdown";
import { DropdownButton } from "@redesign-system/react-ui/Dropdown/DropdownButton";
import { DropdownContent } from "@redesign-system/react-ui/Dropdown/DropdownContent";
import { ShareVariantIcon } from "@redesign-system/react-material-icons/ShareVariantIcon";
import {
  EmailShareButton,
  PocketShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { Match } from "@redesign-system/react/Match";

import Img from "gatsby-image";

import { PageLayout } from "../features/PageLayout";
import { useYamlNodes } from "../hooks/useYamlNodes";
import { SocialLinks } from "../components/SocialLinks";
import { SocialButton } from "../components/SocialButton";

// import { FacebookShareButton } from "../components/ShareButtons/FacebookShareButton";
// import { TwitterShareButton } from "../components/ShareButtons/TwitterShareButton";
// import { LinkedInShareButton } from "../components/ShareButtons/LinkedInShareButton";

import { SocialIcon } from "../components/SocialIcon";

import { Box } from "@redesign-system/react-ui/Box";
import { Section } from "@redesign-system/react-ui/Section";

interface Props extends PageProps {
  readonly data: Record<string, any>;
}

const PostTemplate: FC<Props> = function Post({
  data: {
    allDataYaml: { nodes: dataNodes },
    mdx: { frontmatter, body },
    images,
  },
  ...propsRest
}) {
  const [shareOpen, setShareOpen] = React.useState(false);
  const { company, social, ...data } = useYamlNodes(dataNodes);

  const url = `${propsRest.location.origin}${propsRest.uri}`;
  const source = propsRest.location.origin;
  const title = frontmatter.title;

  function handleShareToggle() {
    // eslint-disable-next-line functional/no-expression-statement
    setShareOpen(!shareOpen);
  }

  return (
    <PageLayout
      id="Post-page"
      company={company}
      social={social}
      {...data}
      page={propsRest}
    >
      <Section
        centered
        mw="768px"
        px={7}
        mt={8}
        mq={{
          lg: {
            min: { mt: 12 },
          },
        }}
      >
        <style>{`
         .react-share__ShareButton {
          display: flex;
          align-items: center;
          padding: 8px !important;
          border: 0.2em solid transparent;
          color: #fff;
          fill: #fff;
        }
        .react-share__ShareButton:hover,
        .react-share__ShareButton:active,
        .react-share__ShareButton:focus {
          color: var(--link-color) !important;
          fill: var(--link-color) !important;
        }
        .react-share__ShareButton:focus {
          border: 0.2em solid #006dea !important;
          outline: 0.2em solid transparent;
        }
        .DropdownContent .react-share__ShareButton {
          width: 100%;
          padding: 10px 24px !important;

        }
        `}</style>
        <h1>{frontmatter.title}</h1>
        <Typography fs={1} color="#C6C6C6" mb={8} mt={3}>
          {frontmatter.date}
        </Typography>
        <MDXRenderer>{body}</MDXRenderer>

        <Box
          d="flex"
          flw="wrap"
          ai="center"
          mt={13}
          pb={3}
          mb={8}
          bdb="1px solid #778094"
        >
          Share
          {/* <ShareButtons
         
          /> */}
          <Match>
            <FacebookShareButton url={url}>
              <SocialButton as="span" label="FACEBOOK" />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title} via="otissv">
              <SocialButton as="span" label="TWITTER" />
            </TwitterShareButton>
            <LinkedinShareButton title={title} source={source} url={url}>
              <SocialButton as="span" label="linked_in" />
            </LinkedinShareButton>

            <Dropdown id="share-dropdown">
              <DropdownButton
                id="share-dropdown"
                onClick={handleShareToggle}
                title="share options"
              >
                <ShareVariantIcon color="var(--link-color)" />
              </DropdownButton>
              <DropdownContent
                id="share-dropdown"
                opened={shareOpen}
                elevate={5}
                d="flex"
                fld="column"
                background="var(--background-color-2)"
              >
                <Box className="share-button-container">
                  <EmailShareButton subject={title} url={url}>
                    <SocialIcon type="EMAIL" mr={3} />
                    Email
                  </EmailShareButton>
                </Box>
                <PocketShareButton url={url} title={title}>
                  <SocialIcon type="POCKET" mr={3} />
                  Pocket
                </PocketShareButton>
                <TelegramShareButton title={title} url={url}>
                  <SocialIcon type="TELEGRAM" mr={3} />
                  Telegram
                </TelegramShareButton>
                <ViberShareButton title={title} url={url}>
                  <SocialIcon type="VIBER" mr={3} />
                  Viber
                </ViberShareButton>
                <WhatsappShareButton title={title} url={url}>
                  <SocialIcon type="WHATS_APP" mr={3} />
                  Whatsapp
                </WhatsappShareButton>
              </DropdownContent>
            </Dropdown>
          </Match>
        </Box>

        <Box
          d="flex"
          fld="column"
          mb={10}
          mq={{
            md: {
              min: {
                flexDirection: "row",
              },
            },
          }}
        >
          <Box d="flex" jc="center" flex="1" mb={5}>
            <Img
              fluid={images.me.fluid}
              alt="Otis Virginie"
              style={{ width: "168px", height: "168px", borderRadius: "100%" }}
            />
          </Box>
          <Box
            mq={{
              md: {
                min: {
                  ml: 8,
                },
              },
            }}
          >
            <Typography as="h3" fs={5} mb={3}>
              The Author
            </Typography>

            <Typography>
              This article was written by Otis Virginie. A long-time remote
              working freelance web developer who loves helping others get ahead
              through his experiences.
            </Typography>

            <SocialLinks
              d="flex"
              fld="column"
              mt={6}
              links={social.map(({ label, url }: any) => ({
                label,
                url,
                content: `Follow me on ${label}`,
              }))}
            />
          </Box>
        </Box>
      </Section>
    </PageLayout>
  );
};

export default PostTemplate;

export const query = graphql`
  query PostsBySlug($slug: String!) {
    ...page
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
    images: file(relativePath: { eq: "me1.jpeg" }) {
      me: childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
