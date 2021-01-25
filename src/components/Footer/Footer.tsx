import React from "react";
import { Box } from "@redesign-system/react-ui/Box";

import { FooterColumnProps, FooterProps } from "./types.footer";

export function Footer<Props extends FooterProps>({
  children,
  className = "",
  ...propsRest
}: Props): JSX.Element {
  const classNames = `Footer ${className}`;

  return (
    <Box
      className={classNames}
      as="footer"
      lineHeight={4}
      bg="var(--background-color-2)"
      {...propsRest}
      pt={10}
      pb={5}
      px={7}
      mq={{
        lg: {
          min: {
            paddingLeft: 12,
            paddingRight: 12,
          },
        },
      }}
    >
      <Box
        className="Footer-container"
        centered
        mw="var(--container)"
        display="flex"
        jc="space-between"
        fld="column"
        mq={{
          md: {
            min: { fld: "row" },
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export function FooterColumn({
  children,
  ...propsRest
}: FooterColumnProps): JSX.Element {
  return (
    <Box d="flex" fld="column" {...propsRest}>
      {children}
    </Box>
  );
}
