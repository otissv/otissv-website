/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import "./src/styles/variables.css";
import "./src/styles/global.css";

import React from "react";
import { ThemeProvider } from "@redesign-system/react/ThemeContext";

import { RootElement } from "./RootElement";
import { createMyCache } from "./create-emotion-cache";

import { theme } from "./theme";
const App = ({ element }) => (
  <ThemeProvider theme={theme} isBuilt={true}>
    {element}
  </ThemeProvider>
);

export const wrapRootElement = ({ element }) => {
  return (
    <RootElement value={createMyCache()}>
      <App>{element}</App>
    </RootElement>
  );
};
