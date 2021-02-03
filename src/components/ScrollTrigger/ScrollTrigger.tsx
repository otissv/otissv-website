/* eslint-disable functional/no-return-void */
import React from "react";

import ReactScrollTrigger from "react-scroll-trigger";
import { Box } from "@redesign-system/react-ui/Box";

const ScrollTriggerComponent: any = ReactScrollTrigger;

export function ScrollTrigger({
  onEnter,
  onExit,
  ...propsRest
}: {
  readonly onEnter: () => void;
  readonly onExit?: () => void;
  readonly [key: string]: any;
}): JSX.Element {
  return (
    <Box css={{ position: "relative" }}>
      <ScrollTriggerComponent
        onEnter={onEnter}
        onExit={onEnter || onExit}
        {...propsRest}
      />
    </Box>
  );
}
