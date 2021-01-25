/* eslint-disable functional/no-mixed-type */
export interface ShareButtonsProps {
  readonly source: string;
  readonly title: string;
  readonly url: string;
  readonly [key: string]: any;
}

export interface ShareButtonProps {
  readonly url: string;
}

export interface EmailShareButtonProps extends ShareButtonProps {
  readonly children?: React.ReactNode;
  readonly subject: string;
}

export interface FacebookShareButtonProps extends ShareButtonProps {
  readonly children?: React.ReactNode;
}

export interface LinkedInShareButtonProps extends ShareButtonProps {
  readonly children?: React.ReactNode;
  readonly source: string;
  readonly title: string;
}

export interface PocketShareButtonProps extends ShareButtonProps {
  readonly children?: React.ReactNode;
  readonly title: string;
}

export interface TelegramShareButtonProps extends ShareButtonProps {
  readonly children?: React.ReactNode;
  readonly title: string;
}

export interface TwitterShareButtonProps extends ShareButtonProps {
  readonly children?: React.ReactNode;
  readonly title: string;
  readonly via: string;
}

export interface ViberShareButtonProps extends ShareButtonProps {
  readonly children?: React.ReactNode;
  readonly title: string;
}

export interface WhatsappShareButtonProps extends ShareButtonProps {
  readonly children?: React.ReactNode;
  readonly title: string;
}
