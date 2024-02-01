import * as React from "react";
import Image from "next/image";
import { Tier } from "./Tier";
import { Icon } from "./Icon";
import Link from "next/link";

interface Props {
  name: string;
  icon: any;
  description: string;
  terms: string;
  cost?: string;
  tiers?: {
    title: string;
    cost: string;
    included?: string[];
    excluded?: string[];
    link?: string;
  }[];
}

export const Service: React.FunctionComponent<Props> = ({
  name,
  icon,
  description,
  terms,
  cost,
  tiers,
}) => {
  return (
    <div className="employer">
      <div className="employer-details">
        <div className="logo">
          <Icon icon={icon} size={3} />
        </div>
        <div className="title">
          <h3>{name}</h3>
          <p>{cost}</p>
          <p className="muted">
            {`${description}`}
            {terms && ` - `}
            {terms && <Link href={terms}>Terms</Link>}
          </p>
        </div>
      </div>
      {tiers &&
        tiers.map((tier, i) => {
          return (
            <Tier
              key={i}
              title={tier.title}
              cost={tier.cost}
              included={tier.included}
              excluded={tier.excluded}
              link={tier.link ? tier.link : "mailto:hello@jamestarpey.com"}
            />
          );
        })}
    </div>
  );
};
