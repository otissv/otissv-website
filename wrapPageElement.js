/* eslint-disable */
import React from "react";

import { ThemeProvider } from "@redesign-system/react/ThemeContext";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { theme } from "./theme";

const myCache = createCache({
  key: "test-prefix",
  stylisPlugins: [
    /* your plugins here */
  ],
  // prefix based on the css property
  prefix: (key) => {
    switch (key) {
      case "flex":
        return false;
      case "transform":
      default:
        return true;
    }
  },
});

export const wrapPageElement = ({ element }) => (
  <CacheProvider value={myCache}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </CacheProvider>
);
