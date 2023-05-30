import React from 'react';
import Information from '../compositionModels/Information';

interface InformationWrapperProps {
  className?: string;
}

const InformationWrapper: React.FC<InformationWrapperProps> = ({ className }) => {
  return (
    <Information className={className} />
  );
};

export default InformationWrapper;
