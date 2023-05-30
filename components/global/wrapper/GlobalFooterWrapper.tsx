import React, { ReactNode } from 'react';
import GlobalFooter from '../GlobalFooter';

type FooterWrapperProps = {
  children?: ReactNode;
  className?: string;
};

const GlobalFooterWrapper: React.FC<FooterWrapperProps> = ({ children, className }) => (
  <GlobalFooter className={className}>{children}</GlobalFooter>
);

export default GlobalFooterWrapper;
