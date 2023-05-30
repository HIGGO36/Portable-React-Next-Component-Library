import React from 'react';
import GlobalCardWrapper from './GlobalCardWrapper';

interface GlobalCardMultipleWrapperProps {
  count: number;
  cardProps: {
    title: string;
    paragraph: string;
    listItems: string[];
  };
}

const GlobalCardMultipleWrapper: React.FC<GlobalCardMultipleWrapperProps> = ({ count, cardProps }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <GlobalCardWrapper key={i} {...cardProps} />
      ))}
    </>
  );
};

export default GlobalCardMultipleWrapper;
