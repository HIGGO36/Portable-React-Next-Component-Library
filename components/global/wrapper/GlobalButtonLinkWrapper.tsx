import React from 'react';
import GlobalButtonLink from '../GlobalButtonLink';

interface GlobalButtonLinkWrapperProps {
  href: string;
  children: React.ReactNode;
}

const GlobalButtonLinkWrapper: React.FC<GlobalButtonLinkWrapperProps> = ({
  href,
  children,
}) => {
  return <GlobalButtonLink href={href}>{children}</GlobalButtonLink>;
};

export default GlobalButtonLinkWrapper;
