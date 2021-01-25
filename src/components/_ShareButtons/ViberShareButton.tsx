import React from "react";
import { ViberShareButton as ViberShare } from "react-share";

import { SocialButton } from "../SocialButton";

import { ViberShareButtonProps } from "./types.shareButtons";

export function ViberShareButton({
  title,
  url,
  ...propRest
}: ViberShareButtonProps): JSX.Element {
  return (
    <ViberShare className="share-button" title={title} url={url}>
      <SocialButton as="span" label="Viber" {...propRest} />
    </ViberShare>
  );
}
