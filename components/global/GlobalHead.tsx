import React from 'react';
import Head from 'next/head';

type GlobalHeadProps = {
  title?: string;
  customMetaTags?: React.ReactElement[];
}

const GlobalHead: React.FC<GlobalHeadProps> = ({ title = 'Universal Components Library', customMetaTags }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    {customMetaTags && customMetaTags.map((tag, index) => React.cloneElement(tag, { key: index }))}
  </Head>
);

export default GlobalHead;
