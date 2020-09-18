import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <section>
        <h2>Page not found</h2>
        <p>If you entered a web address check it is correct.</p>
        <p>
          You can go back to the <Link to="/">homepage</Link>.
        </p>
      </section>
    </>
  );
};
