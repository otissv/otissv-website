import React from "react";
import { WhatsappShareButton as WhatsappShare } from "react-share";

import { SocialButton } from "../SocialButton";

import { WhatsappShareButtonProps } from "./types.shareButtons";

export function WhatsappShareButton({
  title,
  url,
  ...propRest
}: WhatsappShareButtonProps): JSX.Element {
  return (
    <WhatsappShare className="share-button" title={title} url={url}>
      <SocialButton as="span" label="WhatsApp" {...propRest} />
    </WhatsappShare>
  );
}
