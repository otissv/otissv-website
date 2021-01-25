import { ON_ENTER, ON_EXIT } from "./useScrollTrigger";

export function useAnimations({
  opacity = [],
  transform = [],
}: {
  readonly opacity?: readonly any[];
  readonly transform?: readonly any[];
}): {
  readonly ON_ENTER: {
    readonly opacity?: {
      readonly from: string;
      readonly to: string;
      readonly [key: string]: any;
    };
    readonly transform?: {
      readonly from: string;
      readonly to: string;
      readonly [key: string]: any;
    };
  };
  readonly ON_EXIT: {
    readonly opacity?: {
      readonly from: string;
      readonly to: string;
      readonly [key: string]: any;
    };
    readonly transform?: {
      readonly from: string;
      readonly to: string;
      readonly [key: string]: any;
    };
  };
} {
  return {
    [ON_ENTER]: {
      ...(opacity
        ? {
            opacity: {
              from: opacity[0],
              to: opacity[1] || 1,
              ...opacity[2],
            },
          }
        : {}),
      ...(transform
        ? {
            transform: {
              from: transform[0],
              to: transform[1] || 0,
              bounce: 1,
              ...opacity[2],
            },
          }
        : {}),
    },
    [ON_EXIT]: {
      ...(opacity[1]
        ? {
            opacity: {
              from: opacity[1],
              to: opacity[0],
              ...opacity[2],
            },
          }
        : {}),
      ...(transform[1]
        ? {
            transform: {
              from: transform[1],
              to: transform[0],
              bounce: 1,
              ...opacity[2],
            },
          }
        : {}),
    },
  };
}
