import React from "react";
export const ON_ENTER = "ON_ENTER";
export const ON_EXIT = "ON_EXIT";

export type UseScrollTriggerStateReturnType = {
  /* eslint-disable functional/no-return-void */
  readonly animate: typeof ON_ENTER | typeof ON_EXIT;
  readonly onEnter: () => void;
  readonly onExit: () => void;
};

export function useScrollTrigger(): UseScrollTriggerStateReturnType {
  const [state, setState] = React.useState<typeof ON_ENTER | typeof ON_EXIT>(
    ON_EXIT,
  );

  function onEnter() {
    // eslint-disable-next-line functional/no-expression-statement
    setState(ON_ENTER);
  }

  function onExit() {
    // eslint-disable-next-line functional/no-expression-statement
    setState(ON_EXIT);
  }

  return {
    animate: state,
    onEnter,
    onExit,
  };
}
