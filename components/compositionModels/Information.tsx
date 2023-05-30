import React, { useState } from 'react';
import TVAnimation from '../animation/lottie/TVAnimation';
import { UCDS1, UCDS2, UCDS3, UCDS4, UCDS5, UCDS6, UCDS7, UCDS8, UCDS9, UCDS10 } from '../context/UCDS';
import styles from '../styles/InformationBox.module.scss';


interface InformationBoxProps {
  className?: string;
}

const InformationBox: React.FC<InformationBoxProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={`${styles.informationBox} ${className}`}>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tab} ${activeTab === 1 ? styles.activeTab : ''}`}
          onClick={() => handleTabClick(1)}
        >
          00
        </button>
        <button
          className={`${styles.tab} ${activeTab === 2 ? styles.activeTab : ''}`}
          onClick={() => handleTabClick(2)}
        >
          01
        </button>
        <button
          className={`${styles.tab} ${activeTab === 3 ? styles.activeTab : ''}`}
          onClick={() => handleTabClick(3)}
        >
          02
        </button>
        <button
          className={`${styles.tab} ${activeTab === 4 ? styles.activeTab : ''}`}
          onClick={() => handleTabClick(4)}
        >
          03
        </button>
        <button
          className={`${styles.tab} ${activeTab === 5 ? styles.activeTab : ''}`}
          onClick={() => handleTabClick(5)}
        >
          04
        </button>
         <button
          className={`${styles.tab} ${activeTab === 6 ? styles.activeTab : ''}`}
          onClick={() => handleTabClick(6)}
        >
          05
        </button>
                <button
          className={`${styles.tab} ${activeTab === 7 ? styles.activeTab : ''}`}
          onClick={() => handleTabClick(7)}
        >
          06
        </button>
                <button
          className={`${styles.tab} ${activeTab === 8 ? styles.activeTab : ''}`}
          onClick={() => handleTabClick(8)}
        >
          07
        </button>
                <button
          className={`${styles.tab} ${activeTab === 9 ? styles.activeTab : ''}`}
          onClick={() => handleTabClick(9)}
        >
          08
        </button>
                <button
          className={`${styles.tab} ${activeTab === 10 ? styles.activeTab : ''}`}
          onClick={() => handleTabClick(10)}
        >
          09
        </button>

      </div>
      <div className={styles.innerPage}>
       {activeTab === 1 && (
    <div>
      <TVAnimation><UCDS1 /></TVAnimation>
    </div>
        )}
        
        {activeTab === 2 && <div> <TVAnimation><UCDS2 /></TVAnimation>  </div>}  
        {activeTab === 3 && <div><TVAnimation><UCDS3 /></TVAnimation>    </div>}
        {activeTab === 4 && <div><TVAnimation><UCDS4 /></TVAnimation>   </div>}
        {activeTab === 5 && <div><TVAnimation><UCDS5 /></TVAnimation>   </div>}
        {activeTab === 6 && <div><TVAnimation><UCDS6 /></TVAnimation> </div>}
        {activeTab === 7 && <div><TVAnimation><UCDS7 /></TVAnimation> </div>}
        {activeTab === 8 && <div><TVAnimation><UCDS8 /></TVAnimation> </div>}
        {activeTab === 9 && <div><TVAnimation><UCDS9 /></TVAnimation> </div>}
        {activeTab === 10 && <div><TVAnimation><UCDS10 /></TVAnimation> </div>}
      </div>
    </div>
  );
};

export default InformationBox;
