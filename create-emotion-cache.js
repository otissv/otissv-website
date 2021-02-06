/* eslint-disable */
import createCache from "@emotion/cache";

export function createMyCache() {
  return createCache({
    key: "my-prefix-key",
    stylisPlugins: [
      /* your plugins here */
    ],
  });
}
export const myCache = createMyCache();
