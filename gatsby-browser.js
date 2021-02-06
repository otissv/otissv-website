/* eslint-disable */
import "./src/styles/variables.css";
import "./src/styles/global.css";

import React from "react";
import { ThemeProvider } from "@redesign-system/react/ThemeContext";

import { myCache } from "./create-emotion-cache";
import { RootElement } from "./RootElement";
import { theme } from "./theme";

export const wrapRootElement = ({ element }) => (
  <RootElement value={myCache}>
    <ThemeProvider theme={theme} isBuilt={true}>
      {element}
    </ThemeProvider>
  </RootElement>
);
