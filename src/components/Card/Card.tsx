import React from "react";
import { Box } from "@redesign-system/react-ui/Box";
import { CardProps } from "./types.section";

export function Card<Props extends CardProps>({
  children,
  className = "",
  mq = {},
  ...propsRest
}: Props): JSX.Element {
  const classNames = `Card ${className}`;

  return (
    <Box
      className={classNames}
      bg="var(--background-color-3)"
      elevate={2}
      px={5}
      pb={8}
      pt={7}
      radius="rounded"
      mq={{
        ...mq,
        sm: {
          ...mq?.sm,
          min: {
            ...mq?.sm?.min,
            paddingLeft: 8,
            paddingRight: 8,
          },
          max: {
            ...mq?.sm?.max,
            paddingLeft: 8,
            paddingRight: 8,
          },
        },

        md: {
          ...mq?.md,
          min: {
            ...mq?.md?.min,
            paddingLeft: 8,
            paddingRight: 8,
          },
          max: {
            ...mq?.md?.max,
            paddingLeft: 8,
            paddingRight: 8,
          },
        },

        lg: {
          ...mq?.lg,
          min: {
            ...mq?.lg?.min,
            paddingLeft: 8,
            paddingRight: 8,
          },
          max: {
            ...mq?.lg?.max,
            paddingLeft: 8,
            paddingRight: 8,
          },
        },

        xl: {
          ...mq?.xl,
          min: {
            ...mq?.xl?.min,
            paddingLeft: 8,
            paddingRight: 8,
          },
          max: {
            ...mq?.xl?.max,
            paddingLeft: 8,
            paddingRight: 8,
          },
        },
      }}
      {...propsRest}
    >
      {children}
    </Box>
  );
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Card.displayName = "Card";
