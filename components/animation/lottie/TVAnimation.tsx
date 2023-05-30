import React from 'react';
import Lottie from 'lottie-react';
import TVAnimationData from '../../animation/TVAnimation.json';
import styles from '../../styles/TVAnimation.module.scss';

type TVAnimationProps = {
  className?: string;
  children?: React.ReactNode;
};

const TVAnimation: React.FC<TVAnimationProps> = ({ className, children }) => {
  const animationClasses = `${styles.tvAnimation} ${className}`;

  return (
    <Lottie animationData={TVAnimationData} className={animationClasses}>
      <div className={styles.tvScreen}>{children}</div>
      <div className={styles.tvScreenBackground} />
    </Lottie>
  );
};

export default TVAnimation;
