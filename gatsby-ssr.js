/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import "./src/styles/variables.css";
import "./src/styles/global.css";

import { CacheProvider } from "@emotion/react";

import { createMyCache } from "./create-emotion-cache";
import React from "react";
import { ThemeProvider } from "@redesign-system/react/ThemeContext";

import { theme } from "./theme";
const App = ({ element }) => (
  <ThemeProvider theme={theme} isBuilt={true}>
    {element}
  </ThemeProvider>
);

export const wrapRootElement = ({ element }) => {
  return (
    <CacheProvider value={createMyCache()}>
      <App>{element}</App>
    </CacheProvider>
  );
};
