import React from 'react';
import GlobalAdCase from '../GlobalAdCase';

interface GlobalAdCaseWrapperProps {
  className?: string;
}

const GlobalAdCaseWrapper: React.FC<GlobalAdCaseWrapperProps> = ({ className }) => {
  return <GlobalAdCase className={className} />;
};

export default GlobalAdCaseWrapper;
