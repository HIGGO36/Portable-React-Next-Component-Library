import React, { useState } from 'react';
import Lottie from 'lottie-react';
import darkOrLightAnimationData from '../../animation/DarkOrLight.json';

type DarkOrLightProps = {
  className?: string;
  onClick?: () => void;
  isPlaying?: boolean;
};

const DarkOrLight: React.FC<DarkOrLightProps> = ({ className = '', onClick, isPlaying }) => {
  const [animationIsPlaying, setAnimationIsPlaying] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setAnimationIsPlaying(!animationIsPlaying);
  };

  return (
    <div className={className} onClick={handleClick}>
      <Lottie
        animationData={darkOrLightAnimationData}
        loop={animationIsPlaying}
        autoplay={animationIsPlaying}
      />
    </div>
  );
};

export default DarkOrLight;
