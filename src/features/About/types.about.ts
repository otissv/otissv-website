export interface AboutProps {
  readonly className?: string;
  readonly content: readonly string[];
  readonly images: Record<string, any>;
  readonly lead: string;
  readonly title: string;
}
