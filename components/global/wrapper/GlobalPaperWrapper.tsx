import React from 'react';
import { GlobalPaper } from '../GlobalPaper';

const GlobalPaperWrapper: React.FC = ({ children }) => (
  <GlobalPaper>
    {children}
  </GlobalPaper>
);

export default GlobalPaperWrapper;
