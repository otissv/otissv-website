import React from "react";
import { Box } from "@redesign-system/react-ui/Box";
import { toSnakeCase } from "ufunc/textTransform";

import { SocialLinksProps } from "./types.socialLinks";
import { SocialButton } from "../SocialButton";
import { SocialIcon as SocialIconType } from "../SocialIcon";

export function SocialLinks<Props extends SocialLinksProps>({
  className = "",
  links = [],
  ...propsRest
}: Props): JSX.Element {
  const classNames = `SocialLinks ${className}`;
  return (
    <Box
      className={classNames}
      display="flex"
      childrenProps={{
        margin: "7px",
      }}
      {...propsRest}
    >
      {links.map(({ label, url, content }: any) => {
        return (
          <SocialButton key={label} href={url} label={label}>
            {content}
          </SocialButton>
        );
      })}
    </Box>
  );
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
SocialLinks.displayName = "SocialLinks";

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
      <SocialIconType type={toSnakeCase(label).toUpperCase() as any} />
    </Box>
  );
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
SocialIcon.displayName = "SocialIcon";
