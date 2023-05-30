import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import SneakyDogAnimation from '../animation/lottie/SneakyDogAnimation';
import SneakyCatAnimation from '../animation/lottie/SneakyCatAnimation';
import ClickPulseAnimation from '../animation/lottie/ClickPulseAnimation';
import styles from '../styles/GlobalAdCase.module.scss';

type GlobalAdCaseProps = {
  className?: string;
};

const GlobalAdCase: React.FC<GlobalAdCaseProps> = ({ className }) => {
  const [expanded, setExpanded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleToggleExpandAndClick = () => {
    setExpanded(!expanded);
    setClicked(!clicked);
  };

  const gearHiddenTopAnimation = useSpring({
    transform: expanded ? 'translateY(-100%)' : 'translateY(0%)',
    config: { tension: 300, friction: 30 },
  });

  const gearHiddenBottomAnimation = useSpring({
    transform: expanded ? 'translateY(100%)' : 'translateY(0%)',
    config: { tension: 300, friction: 30 },
  });

  const containerClasses = `${styles.globalRightSide} ${expanded ? styles.expanded : ''} ${
    clicked ? styles.clicked : ''
  } ${className}`;

  return (
    <>
      <div className={containerClasses} onClick={handleToggleExpandAndClick}>
        <h1 className={styles.gearTitleOuterOpen}>Click Inside to Open!</h1>
        <h1 className={styles.gearTitleOuterReset}>Click Outside to Reset!</h1>
        <div className={styles.gearsWrapper}>
          <div className={styles.gear}>
            <h1 className={styles.gearTitleInner}>Click Here to Close!</h1>
          </div>
          <animated.div className={styles.gearHidden} style={gearHiddenTopAnimation}>
            {expanded && <SneakyCatAnimation />}
          </animated.div>
          <animated.div className={styles.gearHidden} style={gearHiddenBottomAnimation}>
            {expanded && <SneakyDogAnimation />}
          </animated.div>
        </div>
        {!expanded && <ClickPulseAnimation className={styles.clickPulse} />}
      </div>
    </>
  );
};

export default GlobalAdCase;
