import React, { ReactNode } from 'react';
import styles from '../styles/GlobalBody.module.scss';

interface GlobalBodyProps {
  className?: string;
  children?: ReactNode | ReactNode[];
  title?: string;
  customMetaTags?: React.ReactElement[];
}

const GlobalBody: React.FC<GlobalBodyProps> = ({
  className,
  children,
  title,
  customMetaTags,
  ...restProps
}) => {
  const classNames = [
    styles.globalBody,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...restProps}>
      {children}
    </div>
  );
};

export default GlobalBody;
