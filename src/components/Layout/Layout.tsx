import React from "react";
import { ThemeProvider } from "@redesign-system/react/ThemeContext";

import { LayoutProps } from "./types.layout";
import { Seo } from "../Seo";
import { theme } from "../../styles/theme";
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
    <ThemeProvider theme={theme}>
      <Seo
        author={author}
        description={description}
        keywords={keywords}
        lang={lang}
        siteMetadata={site}
        title={title}
      />

      {children}
    </ThemeProvider>
  );
}
