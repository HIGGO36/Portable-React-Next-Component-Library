import React from 'react';
import GlobalHead from '../GlobalHead';
import GlobalHorizontalNav from '../GlobalHorizontalNav';
import GlobalLSNav from '../GlobalLSNav';
import GlobalRSNav from '../GlobalRSNav';
import GlobalBody from '../GlobalBody';
import GlobalFooter from '../GlobalFooter';

interface BasicTemplateProps {
  title?: string;
  customMetaTags?: React.ReactElement[];
  bodyClassName?: string;
  component: React.ReactNode;
}

const BasicTemplate: React.FC<BasicTemplateProps> = ({
  title,
  customMetaTags,
  bodyClassName,
  component
}) => {
  return (
    <>
      <GlobalHead title={title} customMetaTags={customMetaTags} />
      <header role="banner">
        <nav role="navigation">
        <GlobalHorizontalNav />
          <GlobalLSNav />
          <GlobalRSNav />
        </nav>
      </header>
      <main role="main" className="content">
        <div className="body-wrapper">  
          <GlobalBody className={bodyClassName}>
            {component}
          </GlobalBody>
        </div>
      </main>
      <footer role="contentinfo">
        <GlobalFooter />
      </footer>
    </>
  );
};

export default BasicTemplate;
