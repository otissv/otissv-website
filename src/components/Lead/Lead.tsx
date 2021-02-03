import React from "react";
import { Typography } from "@redesign-system/react-ui/Typography";

import { LeadProps } from "./types.lead";

export function Lead<Props extends LeadProps>({
  children,
  className = "",
  ...propsRest
}: Props): JSX.Element {
  const classNames = `Lead ${className}`;

  return (
    <Typography
      className={classNames}
      fs={7}
      lineHeight="1.3"
      // css="font-weight: 700;"
      css={{ fontWeight: 700 }}
      {...propsRest}
    >
      {children}
    </Typography>
  );
}
