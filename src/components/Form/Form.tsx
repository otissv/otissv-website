import React from "react";
import { Box } from "@redesign-system/react-ui/Box";
import { FormProps } from "./types.form";

export function Form<Props extends FormProps>({
  children,
  className = "",
  ...propsRest
}: Props): JSX.Element {
  const classNames = `Footer ${className}`;

  return (
    <Box as="form" className={classNames} {...propsRest}>
      {children}
    </Box>
  );
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Form.displayName = "Form";
