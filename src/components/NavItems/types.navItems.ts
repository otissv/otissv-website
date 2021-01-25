/* eslint-disable functional/no-mixed-type */
/* eslint-disable functional/no-return-void */
import { MenuInterface } from "../Menu";

export interface NavItemsProps {
  readonly currentRoute: string;
  readonly onClick: (e: React.MouseEvent<HTMLElement>) => void;
  readonly items: readonly MenuInterface[];
}
