import React, { useState } from 'react';
import NextJsLottieAnimation from '../../components/animation/lottie/NextJsLottieAnimation';
import ReactIconAnimation from '../../components/animation/lottie/ReactIconAnimation';
import MeditationMonkey from '../../components/animation/lottie/MeditationMonkey';
import DarkOrLight from '../../components/animation/lottie/DarkOrLight';
import styles from '../styles/GlobalBoxGrid.module.scss';



interface GlobalBoxGridProps {
  children?: React.ReactNode;
}

export const GlobalBoxGrid: React.FC<GlobalBoxGridProps> = ({ children }) => {

  const [nextJsAnimationPlaying, setNextJsAnimationPlaying] = useState(false);
  const [reactIconAnimationPlaying, setReactIconAnimationPlaying] = useState(false);
  const [monkeyAnimationPlaying, setMonkeyAnimationPlaying] = useState(false);
  const [darkOrLightAnimationPlaying, setDarkOrLightAnimationPlaying] = useState(false);

  const handleNextJsAnimationClick = () => {
    setNextJsAnimationPlaying((prevState) => !prevState);
  };

  const handleReactIconAnimationClick = () => {
    setReactIconAnimationPlaying((prevState) => !prevState);
  };

  const handleMonkeyAnimationClick = () => {
    setMonkeyAnimationPlaying((prevState) => !prevState);
  };

  const handleDarkOrLightAnimationClick = () => {
    setDarkOrLightAnimationPlaying((prevState) => !prevState);
  };

  return (
    <>
      <div className={`${styles.innerWrapperUpper} ${styles.home}`}>
        <div className={styles.blueGraySection}>
          <div className={styles.gridSection}>
            <div className={styles.gridItem}>
              <ReactIconAnimation
                onClick={handleReactIconAnimationClick}
                isPlaying={reactIconAnimationPlaying}
              />
            </div>
            <div className={styles.gridItem}>
              <NextJsLottieAnimation
                onClick={handleNextJsAnimationClick}
                isPlaying={nextJsAnimationPlaying}
              />
            </div>
            <div className={styles.gridItem}>
              <MeditationMonkey
                onClick={handleMonkeyAnimationClick}
                isPlaying={monkeyAnimationPlaying}
              />
            </div>
            <div className={styles.gridItem}>
              <DarkOrLight
                onClick={handleDarkOrLightAnimationClick}
                isPlaying={darkOrLightAnimationPlaying}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.innerWrapperLower} ${styles.home}`}>
        <div className={styles.blueGraySection}>
          <div className={styles.gridSection}>
            <div className={styles.gridItemWithText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sollicitudin vitae enim ac rutrum. Sed dapibus augue quis turpis
                bibendum ultrices.
              </p>
            </div>
            <div className={styles.gridItemWithText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sollicitudin vitae enim ac rutrum. Sed dapibus augue quis turpis
                bibendum ultrices.
              </p>
            </div>
            <div className={styles.gridItemWithText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sollicitudin vitae enim ac rutrum. Sed dapibus augue quis turpis
                bibendum ultrices.
              </p>
            </div>
                        <div className={styles.gridItemWithText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sollicitudin vitae enim ac rutrum. Sed dapibus augue quis turpis
                bibendum ultrices.
              </p>
            </div>
            <div className={styles.gridItemImage}>
              <img
                src="https://via.placeholder.com/350x150"
                alt="placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className={styles.gridItemImage}>
              <img
                src="https://via.placeholder.com/350x150"
                alt="placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default  GlobalBoxGrid;