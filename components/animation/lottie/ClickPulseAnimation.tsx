import React from 'react';
import Lottie from 'lottie-react';
import clickPulseAnimationData from '../../animation/ClickPulse.json';
import styles from '../../styles/ClickPulseAnimation.module.scss';

type ClickPulseAnimationProps = {
  className?: string;
};

const ClickPulseAnimation: React.FC<ClickPulseAnimationProps> = ({ className = '' }) => {
  const animationClasses = `${styles.clickPulse} ${className}`.trim();

  return (
    <Lottie animationData={clickPulseAnimationData} className={animationClasses} />
  );
};

export default ClickPulseAnimation;
