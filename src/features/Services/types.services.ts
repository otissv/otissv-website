export interface ServiceProps {
  readonly className?: string;
  readonly services: ReadonlyArray<{
    readonly url: string;
    readonly content: string;
  }>;
}
