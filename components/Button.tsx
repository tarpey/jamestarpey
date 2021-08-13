import * as React from "react";
import Link from "next/link";
import { Icon } from "./Icon";

interface ButtonProps {
  target?: string;
  url: string;
  text: string;
  icon?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <div className="btn">
      <Link href={props.url}>
        <a target={props.target ? props.target : "_self"}>
          {props.icon ? <Icon icon={props.icon} /> : false}
          <span>{props.text}</span>
        </a>
      </Link>
    </div>
  );
};
