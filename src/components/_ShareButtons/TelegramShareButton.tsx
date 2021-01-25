import React from "react";
import { TelegramShareButton as TelegramShare } from "react-share";

import { SocialButton } from "../SocialButton";

import { TelegramShareButtonProps } from "./types.shareButtons";

export function TelegramShareButton({
  title,
  url,
  ...propRest
}: TelegramShareButtonProps): JSX.Element {
  return (
    <TelegramShare className="share-button" title={title} url={url}>
      <SocialButton as="span" label="Telegram" {...propRest} />
    </TelegramShare>
  );
}
