import React from "react";
import Helmet from "react-helmet";

import { SeoProps } from "./types.seo";

export function Seo<Props extends SeoProps>({
  description = "",
  keywords = [],
  lang = "en-GB",
  meta = [],
  siteMetadata = {},
  title,
  author,
  ...propsRest
}: Props): JSX.Element {
  const metaDescription = description || siteMetadata.description;
  const metaTitle = title || siteMetadata.title;
  const metaKeywords = keywords || siteMetadata.keywords || [];
  const metaAuthor = author || siteMetadata.author;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaKeywords.length > 0
            ? {
                name: `keywords`,
                content: metaKeywords.join(`, `),
              }
            : [],
        )
        .concat(meta as readonly any[])}
      {...propsRest}
    />
  );
}
