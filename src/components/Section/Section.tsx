import React from "react";
import { Box } from "@redesign-system/react-ui/Box";
import { SectionProps } from "./types.section";

export function Section<Props extends SectionProps>({
  children,
  className = "",
  ...propsRest
}: Props): JSX.Element {
  const classNames = `Section ${className}`;

  return (
    <Box className={classNames} as="section" {...propsRest}>
      {children}
    </Box>
  );
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Section.displayName = "Section";
