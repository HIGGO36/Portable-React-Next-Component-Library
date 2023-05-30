import React from 'react';
import GlobalArticle from '../GlobalArticle';

interface GlobalArticleWrapperProps {
  leftContent: {
    header?: string;
    paragraph?: string;
    listItems?: string[];
  };
  rightContent: {
    header?: string;
    paragraph?: string;
    listItems?: string[];
  };
}

const GlobalArticleWrapper: React.FC<GlobalArticleWrapperProps> = ({ leftContent, rightContent }) => {
  return <GlobalArticle leftContent={leftContent} rightContent={rightContent} />;
};

export default GlobalArticleWrapper;
