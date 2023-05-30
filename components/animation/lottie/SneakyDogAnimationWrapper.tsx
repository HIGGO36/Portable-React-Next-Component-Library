import React from 'react';
import SneakyDogAnimation from './SneakyDogAnimation';

type SneakyDogAnimationWrapperProps = {
  className?: string;
};

const SneakyDogAnimationWrapper: React.FC<SneakyDogAnimationWrapperProps> = ({ className }) => {
  return <SneakyDogAnimation className={className} />;
};

export default SneakyDogAnimationWrapper;
