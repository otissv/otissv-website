import React from "react";
import { ButtonInterface } from "@redesign-system/react-ui/Button";

import { Button } from "./Button";

export function CTAButton({
  children,
  ...propsRest
}: ButtonInterface): JSX.Element {
  return (
    <Button
      as="a"
      appearance="CTA"
      px={5}
      {...propsRest}
      d="inline-flex"
      ai="center"
    >
      {children}
      <svg
        style={{ marginLeft: "10px", transform: " translateY(3px)" }}
        width="31"
        height="18"
        viewBox="0 0 31 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 9H28" stroke="white" strokeWidth="2" />
        <path d="M19.0555 1L28.5 9L19.0555 17" stroke="white" strokeWidth="2" />
      </svg>
    </Button>
  );
}
