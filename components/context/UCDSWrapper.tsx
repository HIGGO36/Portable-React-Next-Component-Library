import React from 'react';
import styles from '../styles/UCDS.module.scss';
import {
  UCDS1,
  UCDS2,
  UCDS3,
  UCDS4,
  UCDS5,
  UCDS6,
} from './UCDS';

interface UCDSWrapperProps {
  className?: string;
}

const UCDSWrapper: React.FC<UCDSWrapperProps> = ({ className }) => {
  return (
    <div className={`${styles.ucdsWrapper} ${className}`}>
      <UCDS1 />
      <UCDS2 />
      <UCDS3 />
      <UCDS4 />
      <UCDS5 />
      <UCDS6 />
      {/* Add more UCDS components as needed */}
    </div>
  );
};

export default UCDSWrapper;
