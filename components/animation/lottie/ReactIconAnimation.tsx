import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../ReactIconAnimation.json';

type ReactIconAnimationProps = {
  className?: string;
  onClick?: () => void;
  isPlaying?: boolean;
};

const ReactIconAnimation: React.FC<ReactIconAnimationProps> = ({ className, onClick, isPlaying }) => {
  const [animationIsPlaying, setAnimationIsPlaying] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setAnimationIsPlaying(!animationIsPlaying);
  };

  const animationClasses = `${className}`;

  return (
    <Lottie
   animationData={animationData}
      loop={animationIsPlaying}
      autoplay={animationIsPlaying}
      className={animationClasses}
      onClick={handleClick}
    />
  );
};

export default ReactIconAnimation;
