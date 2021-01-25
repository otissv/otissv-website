import React from "react";
import { PocketShareButton as PocketShare } from "react-share";

import { SocialButton } from "../SocialButton";

import { PocketShareButtonProps } from "./types.shareButtons";

export function PocketShareButton({
  title,
  url,
  ...propRest
}: PocketShareButtonProps): JSX.Element {
  return (
    <PocketShare className="share-button" title={title} url={url}>
      <SocialButton as="span" label="Pocket" {...propRest} />
    </PocketShare>
  );
}
