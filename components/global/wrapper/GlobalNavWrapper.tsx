import React from 'react';
import GlobalNav from '../GlobalNav';

type GlobalNavWrapperProps = {
  customNavItems?: React.ReactElement[];
}

const GlobalNavWrapper: React.FC<GlobalNavWrapperProps> = (props) => {
  return (
    <GlobalNav {...props} />
  );
};

export default GlobalNavWrapper;
