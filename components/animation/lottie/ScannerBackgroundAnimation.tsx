import React from 'react';
import Lottie from 'react-lottie';
import scannerAnimation from '../ScannerBackgroundAnimated.json';

const ScannerBackgroundAnimated = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scannerAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Lottie options={defaultOptions} height="100%" width="100%" isClickToPauseDisabled />
    </div>
  );
};

export default ScannerBackgroundAnimated;
