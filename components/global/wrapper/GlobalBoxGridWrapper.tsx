import React from 'react';
import GlobalBoxGrid from '../GlobalBoxGrid';

interface GlobalBoxGridWrapperProps {
  title: string;
}

const GlobalBoxGridWrapper: React.FC<GlobalBoxGridWrapperProps> = ({
  title,
  ...restProps
}) => {
  return (
    <>
      <h1>{title}</h1>
      <GlobalBoxGrid {...restProps} />
    </>
  );
};

export default GlobalBoxGridWrapper;
