import React from "react";
import ReactMarkdown from "react-markdown";
import { Box } from "@redesign-system/react-ui/Box";

import { MarkdownProps } from "./types.markdown";

const MarkdownComponent: any = ReactMarkdown;

export function Markdown<Props extends MarkdownProps>({
  className = "",
  children,
  ...propsRest
}: Props): JSX.Element {
  return (
    <Box
      className={`Markdown ${className}`}
      transition="all 0.5s ease"
      {...propsRest}
    >
      <MarkdownComponent style={{ fontSize: "inherit" }}>
        {children}
      </MarkdownComponent>
    </Box>
  );
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Markdown.displayName = "Markdown";
