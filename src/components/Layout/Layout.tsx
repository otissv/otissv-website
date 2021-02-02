import React, { Fragment } from "react";

import { LayoutProps } from "./types.layout";
import { Seo } from "../Seo";
export function Layout<Props extends LayoutProps>({
  author,
  children,
  description,
  keywords,
  lang,
  site = {},
  title,
}: Props): JSX.Element {
  return (
    <Fragment>
      <Seo
        author={author}
        description={description}
        keywords={keywords}
        lang={lang}
        siteMetadata={site}
        title={title}
      />

      {children}
    </Fragment>
  );
}
