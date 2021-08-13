import * as React from "react";
import Image from "next/image";
import { Role } from "./Role";

interface Props {
  name: string;
  logo: any;
  start: string;
  end?: string;
  roles: {
    title: string;
    start: string;
    end?: string;
    duties?: string[];
  }[];
}

export const Employer: React.FunctionComponent<Props> = ({
  name,
  logo,
  start,
  end,
  roles,
}) => {
  return (
    <div className="employer">
      <div className="employer-details">
        <div className="logo">
          <Image src={`/${logo}`} alt={`${name} logo`} width={80} height={80} />
        </div>
        <div className="title">
          <h3>{name}</h3>
          <p className="muted">{`${start} - ${end ? end : " Present"}`}</p>
        </div>
      </div>
      {roles.map((role, i) => {
        return (
          <Role
            key={i}
            title={role.title}
            start={role.start}
            end={role.end}
            duties={role.duties}
          />
        );
      })}
    </div>
  );
};
