import React from "react";
import { Box } from "@redesign-system/react-ui/Box";
import { toSnakeCase } from "ufunc/textTransform";

import { SocialButtonProps } from "./types.socialButton";
import { SocialIcon as SocialIconType } from "../SocialIcon";

export function SocialButton({
  as = "a",
  className = "",
  label,
  children,
  href,
  ...propsRest
}: SocialButtonProps): JSX.Element {
  const classNames = `SocialButton ${className}`;

  return (
    <Box
      className={classNames}
      d="inline-flex"
      as={as}
      href={as === "a" && href}
      title={label}
      ai="center"
      {...propsRest}
    >
      <SocialIcon label={label} />
      {children && (
        <Box as="span" ml={4}>
          {children}
        </Box>
      )}
    </Box>
  );
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
SocialButton.displayName = "SocialButton";

const socialIconCss = `
  border: 2px solid var(--link-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--link-color)
  }
  `;

function SocialIcon({ label }: { readonly label: string }) {
  return (
    <Box className="SocialIcon" css={socialIconCss} radius="circle">
      <SocialIconType
        type={toSnakeCase(label).toUpperCase() as any}
        fill="white"
      />
    </Box>
  );
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
SocialIcon.displayName = "SocialIcon";
