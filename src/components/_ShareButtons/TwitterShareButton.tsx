import React from "react";
import { TwitterShareButton as TwitterShare } from "react-share";

import { SocialButton } from "../SocialButton";

import { TwitterShareButtonProps } from "./types.shareButtons";

export function TwitterShareButton({
  title,
  url,
  via,
  ...propRest
}: TwitterShareButtonProps): JSX.Element {
  return (
    <TwitterShare className="share-button" title={title} url={url} via={via}>
      <SocialButton as="span" label="Twitter" {...propRest} />
    </TwitterShare>
  );
}
