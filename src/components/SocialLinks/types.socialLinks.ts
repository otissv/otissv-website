export interface SocialLinksProps {
  readonly className?: string;
  readonly links: readonly SocialLinkInterface[];
}

export interface SocialLinkInterface {
  readonly name: string;
  readonly url: string;
  readonly content: string;
}
