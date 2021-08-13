import * as React from "react";

interface Props {}

export const Footer: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="container">
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 2021 James Tarpey
        </a>
      </footer>
    </div>
  );
};
