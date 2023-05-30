import React from 'react';
import SneakyCatAnimation from './SneakyCatAnimation';

type SneakyCatAnimationWrapperProps = {
  className?: string;
};

const SneakyCatAnimationWrapper: React.FC<SneakyCatAnimationWrapperProps> = ({ className }) => {
  return <SneakyCatAnimation className={className} />;
};

export default SneakyCatAnimationWrapper;
