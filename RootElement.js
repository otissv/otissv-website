/* eslint-disable */

import React from "react";

import { CacheProvider } from "@emotion/react";
import { MDXProvider } from "./MDXProvider";

export const RootElement = ({ children, value }) => {
  return (
    <CacheProvider value={value}>
      <MDXProvider>{children}</MDXProvider>
    </CacheProvider>
  );
};
