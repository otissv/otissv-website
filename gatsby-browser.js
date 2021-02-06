/* eslint-disable */
import "./src/styles/variables.css";
import "./src/styles/global.css";

import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@redesign-system/react/ThemeContext";

import { myCache } from "./create-emotion-cache";

import { theme } from "./theme";

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={myCache}>
    <ThemeProvider theme={theme} isBuilt={true}>
      {element}
    </ThemeProvider>
  </CacheProvider>
);
