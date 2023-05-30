import React from 'react';
import Lottie from 'lottie-react';
import styles from '../../styles/SneakyDogAnimation.module.scss';
import dogAnimationData from '../../animation/dogAnimation.json';

type SneakyAnimationProps = {
  className?: string;
};

const SneakyDogAnimation: React.FC<SneakyAnimationProps> = ({ className }) => {
  const animationClasses = `${styles.lottieDog} ${className}`;

  return (
    <Lottie animationData={dogAnimationData} className={animationClasses} />
  );
};

export default SneakyDogAnimation;