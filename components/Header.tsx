import * as React from "react";
import Head from "next/head";

interface Props {}

export const Header: React.FunctionComponent<Props> = (props) => {
  return (
    <Head>
      <title>James Tarpey</title>
      <meta
        name="description"
        content="Full stack developer in Bristol, England"
      />
      <link rel="icon" href="/favicon.ico?v=2" />
    </Head>
  );
};
