/* eslint-disable functional/no-mixed-type */

export interface SeoProps {
  readonly author?: string;
  readonly description?: string;
  readonly keywords?: readonly string[];
  readonly lang?: string;
  readonly meta?: readonly string[];
  readonly siteMetadata?: SeoProps;
  readonly title?: string;
  readonly [key: string]: any;
}
