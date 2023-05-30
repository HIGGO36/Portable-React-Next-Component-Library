import React, { ReactNode } from 'react';
import GlobalBody from '../GlobalBody';

type BodyWrapperProps = {
  children: ReactNode;
  className?: string;
  title: string;
};

const GlobalBodyWrapper: React.FC<BodyWrapperProps> = ({ children, className }) => (
  <GlobalBody className={className}>{children}</GlobalBody>
);

export default GlobalBodyWrapper;
