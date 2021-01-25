import React from "react";
import { LinkedinShareButton as LinkedinShare } from "react-share";

import { SocialButton } from "../SocialButton";

import { LinkedInShareButtonProps } from "./types.shareButtons";

export function LinkedInShareButton({
  source,
  title,
  url,
  ...propRest
}: LinkedInShareButtonProps): JSX.Element {
  return (
    <LinkedinShare
      className="share-button"
      title={title}
      source={source}
      url={url}
    >
      <SocialButton as="span" label="LinkedIn" {...propRest} />
    </LinkedinShare>
  );
}
