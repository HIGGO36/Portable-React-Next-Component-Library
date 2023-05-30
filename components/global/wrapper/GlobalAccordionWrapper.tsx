import React from 'react';
import GlobalAccordion from '../GlobalAccordion';

interface GlobalAccordionWrapperProps {
  className?: string;
}

const GlobalAccordionWrapper: React.FC<GlobalAccordionWrapperProps> = ({ className }) => {
  return <GlobalAccordion className={className} />;
};

export default GlobalAccordionWrapper;
