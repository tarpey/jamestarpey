import * as React from "react";
import { Button } from "./Button";

interface Props {
  title: string;
  cost: string;
  included?: string[];
  excluded?: string[];
  link: string;
}

export const Tier: React.FunctionComponent<Props> = ({
  title,
  cost,
  included,
  excluded,
  link,
}) => {
  return (
    <div className="role">
      <h4>{title}</h4>
      <p className="muted">{cost}</p>
      <ul style={{ marginBottom: 20 }}>
        {included &&
          included.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        {excluded &&
          excluded.map((item, i) => {
            return (
              <li key={i} className="excluded">
                {item}
              </li>
            );
          })}
      </ul>
      <Button
        target="_blank"
        icon={link === "mailto:hello@jamestarpey.com" ? "mdiEmail" : "mdiPlus"}
        text={link === "mailto:hello@jamestarpey.com" ? "Contact" : "Subscribe"}
        url={link}
      />
    </div>
  );
};
