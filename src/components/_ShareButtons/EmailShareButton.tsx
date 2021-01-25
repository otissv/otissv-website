import React from "react";
import { EmailShareButton as EmailShare } from "react-share";

import { EmailShareButtonProps } from "./types.shareButtons";

export function EmailShareButton<Props extends EmailShareButtonProps>({
  children,
  url,
  subject,
}: Props): JSX.Element {
  return (
    <EmailShare className="share-button" url={url} subject={subject}>
      {children}
    </EmailShare>
  );
}
