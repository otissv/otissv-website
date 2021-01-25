import React, { Fragment } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PocketShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";

import { ShareButtonsProps } from "./types.shareButtons";
import { SocialButton } from "../SocialButton";
export function ShareButtons({
  source,
  title,
  url,
}: ShareButtonsProps): JSX.Element {
  return (
    <Fragment>
      <FacebookShareButton className="share-button" url={url}>
        <SocialButton as="span" label="Facebook" />
      </FacebookShareButton>
      <TwitterShareButton
        className="share-button"
        title={title}
        url={url}
        via="otissv"
      >
        <SocialButton as="span" label="Twitter" />
      </TwitterShareButton>
      <LinkedinShareButton
        className="share-button"
        title={title}
        source={source}
        url={url}
      >
        <SocialButton as="span" label="LinkedIn" />
      </LinkedinShareButton>

      <PocketShareButton className="share-button" url={url} title={title}>
        <SocialButton as="span" label="" />
        Pocket
      </PocketShareButton>

      <EmailShareButton className="share-button" subject={title} url={url}>
        <SocialButton as="span" label="" />
        Email
      </EmailShareButton>

      <TelegramShareButton className="share-button" title={title} url={url}>
        <SocialButton as="span" label="" />
        Telegram
      </TelegramShareButton>

      <ViberShareButton className="share-button" title={title} url={url}>
        <SocialButton as="span" label="" />
        Viber
      </ViberShareButton>

      <WhatsappShareButton className="share-button" title={title} url={url}>
        <SocialButton as="span" label="" />
        Whatsapp
      </WhatsappShareButton>
    </Fragment>
  );
}

// eslint-disable-next-line functional/no-expression-statement,  functional/immutable-data
ShareButtons.displayName = "ShareButtons";
