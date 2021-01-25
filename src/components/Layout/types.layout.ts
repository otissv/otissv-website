/* eslint-disable functional/no-mixed-type */
import { SeoProps } from "../Seo";

export interface LayoutProps {
  readonly children: React.ReactNode;
  readonly author?: string;
  readonly description?: string;
  readonly keywords?: readonly string[];
  readonly lang?: string;
  readonly site?: SeoProps;
  readonly title?: string;
}
