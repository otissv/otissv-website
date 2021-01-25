import React from "react";
import { FacebookShareButton as FacebookShare } from "react-share";

import { SocialButton } from "../SocialButton";
import { FacebookShareButtonProps } from "./types.shareButtons";

export function FacebookShareButton({
  url,
  ...propRest
}: FacebookShareButtonProps): JSX.Element {
  return (
    <FacebookShare className="share-button" url={url}>
      <SocialButton as="span" label="Facebook" {...propRest} />
    </FacebookShare>
  );
}
