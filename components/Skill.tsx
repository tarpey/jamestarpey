import * as React from "react";
import { Icon } from "./Icon";

interface Props {
  text: string;
  icon?: string;
}

export const Skill: React.FunctionComponent<Props> = ({ icon, text }) => {
  return (
    <div className="card">
      {icon ? <Icon icon={icon} size={3} /> : false}
      <span>{text}</span>
    </div>
  );
};
