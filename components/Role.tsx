import * as React from "react";

interface Props {
  title: string;
  start: string;
  end?: string;
  duties?: string[];
}

export const Role: React.FunctionComponent<Props> = ({
  title,
  start,
  end,
  duties,
}) => {
  return (
    <div className="role">
      <h4>{title}</h4>
      <p className="muted">{`${start} - ${end ? end : " Present"}`}</p>
      {duties && (
        <ul>
          {duties.map((duty, i) => {
            return <li key={i}>{duty}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
