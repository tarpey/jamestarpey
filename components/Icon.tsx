import * as React from "react";
import { Icon as MDIcon } from "@mdi/react";

interface Props {
  icon: any;
  size?: number;
}

export const Icon: React.FunctionComponent<Props> = ({ icon, size }) => {
  var MDIcons = require("@mdi/js");
  return <MDIcon path={MDIcons[icon]} size={size ? size : 1} />;
};
