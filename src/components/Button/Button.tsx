import React from "react";
import {
  Button as UIButton,
  ButtonInterface,
} from "@redesign-system/react-ui/Button";
import { css as emotionCSS } from "@emotion/react";

export function Button({
  css = "",
  children,
  className = "",
  ...propsRest
}: ButtonInterface): JSX.Element {
  const classNames = `Card ${className}`;

  const cssUIButton = `
    font-weight: 700;
  ${css}
  `;

  return (
    <UIButton
      className={classNames}
      radius="round"
      css={emotionCSS`
        ${cssUIButton}
      `}
      {...propsRest}
      py="5px"
      px="20px"
    >
      {children}
    </UIButton>
  );
}
