import React, { ReactNode } from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import styles from '../styles/GlobalFooter.module.scss';

type FooterProps = {  // here we are defining className prop
  children?: ReactNode;
  className?: string; 
};

const GlobalFooter: React.FC<FooterProps> = ({ children, className }) => (
  <footer className={`${styles.footer} ${className}`}>
    <div className={styles.content}>
      <div className={styles.copyRight}>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
      <div className={styles.socialIcons}>
 
        <a href="https://github.com/yourcompany" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaGithub />
          </a>
  
   
        <a href="https://linkedin.com/company/yourcompany" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          </a>
      
    
        <a href="https://yourcompany.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaGlobe />
          </a>
      
      </div>
      {children}
    </div>
  </footer>
);

export default GlobalFooter;
