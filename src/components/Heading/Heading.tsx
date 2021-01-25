import React from "react";
import { Typography } from "@redesign-system/react-ui/Typography";

import { HeadingProps } from "./types.heading";

export function Heading<Props extends HeadingProps>({
  children,
  className = "",
  ...propsRest
}: Props): JSX.Element {
  const classNames = `Heading ${className}`;

  return (
    <Typography
      className={classNames}
      as="h2"
      fs={5}
      fw={4}
      ls="2px"
      color="#C6C6C6"
      mb={5}
      {...propsRest}
    >
      {children}
    </Typography>
  );
}
