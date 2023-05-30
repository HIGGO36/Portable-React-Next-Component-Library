import React from 'react';
import GlobalHead from '../GlobalHead';

type GlobalHeadWrapperProps = {
  title?: string;
  customMetaTags?: React.ReactElement[];
}

const GlobalHeadWrapper: React.FC<GlobalHeadWrapperProps> = ({ title, customMetaTags }) => {
  return <GlobalHead title={title} customMetaTags={customMetaTags} />;
}

export default GlobalHeadWrapper;
