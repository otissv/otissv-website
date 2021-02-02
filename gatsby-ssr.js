/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import "./src/styles/variables.css";
import "./src/styles/global.css";

import React from "react";
import { ThemeProvider } from "@redesign-system/react/ThemeContext";

import { theme } from "./theme";

const App = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
