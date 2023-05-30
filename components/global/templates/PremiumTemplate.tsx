import React from 'react';
import GlobalHead from '../GlobalHead';
import GlobalHorizontalNav from '../GlobalHorizontalNav';
import GlobalRSNav from '../GlobalRSNav';
import GlobalLSNav from '../GlobalLSNav';
import GlobalBody from '../GlobalBody';
import GlobalAccordion from '../GlobalAccordion';
import GlobalAdCase from '../GlobalAdCase';
import GlobalFooter from '../GlobalFooter';

interface PremiumTemplateProps {
  title?: string;
  customMetaTags?: React.ReactElement[];
  customNavItems?: React.ReactElement[];
  bodyClassName?: string;
  component: React.ReactNode;
}

const PremiumTemplate: React.FC<PremiumTemplateProps> = ({
  title,
  customMetaTags,
  bodyClassName,
  component
}) => {
  return (
    <>
      <GlobalHead title={title} customMetaTags={customMetaTags} />
      <header>
        <GlobalHorizontalNav />
        <GlobalRSNav />
        <GlobalLSNav />
      </header>

      <div className="content">
        <div className="body-wrapper">
          <GlobalBody className={bodyClassName}>
            {component}

            <GlobalAccordion />
               <GlobalAdCase />
            
          </GlobalBody>
        </div>
      </div>

      <footer>
        <GlobalFooter />
      </footer>
    </>
  );
};

export default PremiumTemplate;
