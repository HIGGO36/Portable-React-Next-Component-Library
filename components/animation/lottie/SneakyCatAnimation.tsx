import React from 'react';
import Lottie from 'lottie-react';
import styles from '../../styles/SneakyCatAnimation.module.scss';
import catAnimationData from '../../animation/catAnimation.json';

type SneakyCatAnimationProps = {
  className?: string;
};

const SneakyCatAnimation: React.FC<SneakyCatAnimationProps> = ({ className }) => {
  const animationClasses = `${styles.lottieCat} ${className}`;

  return <Lottie animationData={catAnimationData} className={animationClasses} />;
};

export default SneakyCatAnimation;
