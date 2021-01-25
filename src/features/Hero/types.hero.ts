import { SocialLinkInterface } from "../../components/SocialLinks";
export interface HeroProps {
  readonly className?: string;
  readonly cta: string;
  readonly images: Record<string, any>;
  readonly lead: string;
  readonly social: readonly SocialLinkInterface[];
  readonly socialInfo: string;
  readonly title: string;
}
