/* eslint-disable */
import React from "react";
import { ThemeProvider } from "@redesign-system/react/ThemeContext";

import "./src/styles/variables.css";
import "./src/styles/global.css";

import { theme } from "./src/styles/theme";

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
