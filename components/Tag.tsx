import * as React from "react";
import { Icon } from "./Icon";

interface TagProps {
  text: string;
  icon?: string;
  hideText?: boolean;
}

export const Tag: React.FunctionComponent<TagProps> = (props) => {
  const text = props.text.toLowerCase().replace(" ", "-").replace(".", "-");
  return (
    <span
      className={`tag ${text}`}
      aria-label={props.text}
      data-balloon-pos="up"
    >
      {props.icon ? <Icon icon={props.icon} /> : false}
      {!props.hideText && <span>{props.text}</span>}
    </span>
  );
};
