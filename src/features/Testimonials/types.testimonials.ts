export interface TestimonialsProps {
  readonly className?: string;
  readonly testimonials: ReadonlyArray<{
    readonly name: string;
    readonly city: string;
    readonly avatar: string;
    readonly content: string;
  }>;
}
