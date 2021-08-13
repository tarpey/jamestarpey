import * as React from "react";
import { Icon } from "./Icon";

interface TagProps {
  text: string;
  icon?: string;
}

export const Tag: React.FunctionComponent<TagProps> = (props) => {
  const text = props.text.toLowerCase().replace(" ", "-").replace(".", "-");
  return (
    <span className={`tag ${text}`}>
      {props.icon ? <Icon icon={props.icon} /> : false}
      <span>{props.text}</span>
    </span>
  );
};
