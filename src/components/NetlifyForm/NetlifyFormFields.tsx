import React from "react";
import { Box } from "@redesign-system/react-ui/Box";
import { Fragment } from "react";

export function NetlifyFormFields({
  name,
}: {
  readonly name: string;
}): JSX.Element {
  return (
    <Fragment>
      <input type="hidden" name="form-name" value={name} />
      <Box
        css={`
          width: 0;
          height: 0px;
          label {
            display: block;
            overflow: hidden;
          }
        `}
      >
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </Box>
    </Fragment>
  );
}
