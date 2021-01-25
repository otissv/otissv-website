const FACEBOOK = "FACEBOOK";
const LINKED_IN = "LINKED_IN";
const INSTAGRAM = "INSTAGRAM";
const TWITTER = "TWITTER";
const EMAIL = "EMAIL";
const POCKET = "POCKET";
const TELEGRAM = "TELEGRAM";
const VIBER = "VIBER";
const WHATS_APP = "WHATS_APP";

export type SocialTypes =
  | typeof FACEBOOK
  | typeof LINKED_IN
  | typeof INSTAGRAM
  | typeof TWITTER
  | typeof EMAIL
  | typeof POCKET
  | typeof TELEGRAM
  | typeof VIBER
  | typeof WHATS_APP;

export interface SocialIconProps {
  readonly type: SocialTypes;
  readonly fill?: string;
}
