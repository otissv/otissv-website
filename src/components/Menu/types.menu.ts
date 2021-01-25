/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-mixed-type */
export interface MenuProps {
  readonly currentRoute: string;
  readonly [key: string]: any;
  readonly items: readonly MenuInterface[];
  readonly className?: string;
}

export interface MenuInterface {
  readonly url: string;
  readonly label: string;
  readonly cta?: boolean;
}
