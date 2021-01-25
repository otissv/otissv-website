import React from "react";

import { Dump } from "../../../components/Dump";

import { PageProps } from "../../types.page";

export default function DumpPage(props: PageProps): JSX.Element {
  return <Dump data={props} />;
}
